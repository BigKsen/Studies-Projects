import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import "./ProductFilter.css"

const ProductFilter = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const [filters, setFilters] = useState({
        category: "",
        priceRange: "",
        color: "",
        season: "",
        material: "",
        size: "",
        onSale: "",
    });

    useEffect(() => {
        fetch("/wp-json/wc/v3/products?consumer_key=YOUR_KEY&consumer_secret=YOUR_SECRET")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
        })
        .catch((err) => console.error("Erreur lors du chargement des produits", err));
    }, []);

    const applyFilters = () => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter((product) =>
                product.categories.some((cat) => cat.name.toLowerCase() === filters.category.toLowerCase())
            );
        }

        if (filters.priceRange) {
            const [min, max] = filters.priceRange.split("-").map((p) => (p === "plus" ? Infinity : parseInt(p)));
            filtered = filtered.filter((product) => {
                const price = parseFloat(product.price);
                return price >= min && price <= max;
            });
        }

        if (filters.color) {
            filtered = filtered.filter((product) =>
                product.attributes.some(
                    (attr) => attr.name.toLowerCase() === "couleur" && attr.options.includes(filters.color)
                )
            );
        }

        if (filters.season) {
            filtered = filtered.filter((product) =>
                product.attributes.some(
                    (attr) => attr.name.toLowerCase() === "saison" && attr.options.includes(filters.season)
                )
            );
        }

        if (filters.material) {
            filtered = filtered.filter((product) =>
                product.attributes.some(
                    (attr) => attr.name.toLowerCase() === "matière" && attr.options.includes(filters.material)
                )
            );
        }

        if (filters.size) {
            filtered = filtered.filter((product) =>
                product.attributes.some(
                    (attr) => attr.name.toLowerCase() === "taille" && attr.options.includes(filters.size)
                )
            );
        }

        if (filters.onSale) {
            filtered = filtered.filter((product) => product.on_sale);
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="product-filter-container">
            <h4 onClick={() => setShowFilters(!showFilters)} className="filter-title">
                Filtrer {showFilters ? "▲" : "▼"}
            </h4>

            <motion.div
                className="product-filter"
                initial={{x: "100%", opacity: 0}}
                animate={{x: showFilters ? 0 : "100%", opacity: showFilters ? 1 : 0}}
                transition={{duration: 0.5, ease: "easeOut"}}
            >
                {/* Filtre Catégorie */}
                <select onChange={(e) => setFilters({...filters, category: e.target.value})} value={filters.category}>
                    <option value="">Toutes les catégories</option>
                    <option value="Sacs">Sacs</option>
                    <option value="Accessoires">Accessoires</option>
                    <option value="Portefeuilles">Portefeuilles</option>
                </select>

                {/* Filtre Prix */}
                <select
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    value={filters.priceRange}
                >
                    <option value="">Tous les prix</option>
                    <option value="0-50">0 - 50€</option>
                    <option value="50-100">50 - 100€</option>
                    <option value="100-200">100 - 200€</option>
                    <option value="200-500">200 - 500€</option>
                    <option value="500-1000">500 - 1000€</option>
                    <option value="1000-plus">1000€ et plus</option>
                </select>

                {/* Filtre Couleur */}
                <select onChange={(e) => setFilters({...filters, color: e.target.value})} value={filters.color}>
                    <option value="">Toutes les couleurs</option>
                    <option value="Noir">Noir</option>
                    <option value="Marron">Marron</option>
                    <option value="Beige">Beige</option>
                    <option value="Vert Olive">Vert Olive</option>
                </select>

                {/* Filtre Saison */}
                <select onChange={(e) => setFilters({...filters, season: e.target.value})} value={filters.season}>
                    <option value="">Toutes les saisons</option>
                    <option value="Été">Été</option>
                    <option value="Hiver">Hiver</option>
                    <option value="Automne">Automne</option>
                    <option value="Printemps">Printemps</option>
                </select>

                {/* Filtre Matière */}
                <select onChange={(e) => setFilters({...filters, material: e.target.value})} value={filters.material}>
                    <option value="">Toutes les matières</option>
                    <option value="Cuir">Cuir</option>
                    <option value="Daim">Daim</option>
                    <option value="Toile">Toile</option>
                </select>

                {/* Filtre Taille */}
                <select onChange={(e) => setFilters({...filters, size: e.target.value})} value={filters.size}>
                    <option value="">Toutes les tailles</option>
                    <option value="Petit">Petit</option>
                    <option value="Moyen">Moyen</option>
                    <option value="Grand">Grand</option>
                </select>


                {/* Filtre Promotion */}
                <select
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            onSale: e.target.value === "" ? "" : e.target.value === "yes" ? true : false,
                        })
                    }
                    value={filters.onSale === "" ? "" : filters.onSale === true ? "yes" : "no"}
                >
                    <option value="">Tous les articles</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>


                {/* Bouton Appliquer */}
                <button className="apply-button" onClick={applyFilters}>
                    Apply
                </button>
            </motion.div>

            <ul className="filtered-products-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <li key={product.id}>
                            <img src={product.images[0]?.src} alt={product.name} width="50" />
                            {product.name} - {product.price}€
                        </li>
                    ))
                ) : (
                    <p>Aucun produit ne correspond à vos critères.</p>
                )}
            </ul>
        </div>
    );
};

export default ProductFilter;
