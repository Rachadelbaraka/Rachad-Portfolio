export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  image?: string;
  featured: boolean;
  e5: {
    contexte: string;
    objectifs: string[];
    problematique: string;
    solutions: string;
    demarcheTechnique: {
      architecture: string;
      stack: string[];
      baseDonnees?: string;
      api?: string;
      securite?: string;
    };
    methodologie: string[];
    competencesBTS: {
      [key: string]: string;
    };
    resultats: string[];
    difficultes: string;
    solutionsApportees: string;
    ameliorations: string;
  };
}

export const projects: Project[] = [
  {
    id: "morefix-webstore",
    title: "MoreFix WebStore",
    slug: "morefix-webstore",
    description: "E-commerce dynamique pour produits reconditionnés avec optimisation performance et conversion.",
    tech: ["Next.js", "React", "TypeScript", "Firebase Auth", "Tailwind CSS"],
    category: "Full-stack",
    github: "https://github.com/Rachadelbaraka/MoreFix_",
    featured: true,
    e5: {
      contexte: "Projet développé pour une boutique de produits reconditionnés avec un fort besoin de clarté, confiance et optimisation du parcours d'achat.",
      objectifs: [
        "Créer une plateforme e-commerce crédible, rapide et sécurisée",
        "Optimiser le parcours d'achat pour améliorer la conversion",
        "Développer une interface moderne et responsive"
      ],
      problematique: "Créer une plateforme e-commerce crédible, rapide, sécurisée et optimisée pour la conversion.",
      solutions: "Application web e-commerce construite avec Next.js, React, TypeScript, Firebase Auth et Tailwind CSS.",
      demarcheTechnique: {
        architecture: "Architecture MVC avec séparation front-end/back-end via API RESTful.",
        stack: ["Next.js", "React", "TypeScript", "Firebase Auth", "Tailwind CSS"],
        baseDonnees: "Firebase Firestore pour les données produits et utilisateurs.",
        api: "APIs Firebase pour authentification et base de données.",
        securite: "Authentification sécurisée avec Firebase Auth, chiffrement des données sensibles."
      },
      methodologie: ["Agile avec sprints de 2 semaines", "Versionnement Git", "Tests automatisés"],
      competencesBTS: {
        "1.1": "Gérer le patrimoine informatique : Maintenance du code source et optimisation des performances.",
        "1.3": "Développer la présence en ligne : Création d'une interface web moderne et accessible.",
        "1.4": "Travailler en mode projet : Gestion du projet en Agile, respect des délais.",
        "1.5": "Mettre à disposition un service : Déploiement et monitoring en production.",
        "1.6": "Organiser son développement professionnel : Apprentissage continu des technologies web."
      },
      resultats: [
        "Score Lighthouse : 96",
        "500+ produits catalogués",
        "Conversion : +45%",
        "Plateforme déployée avec succès"
      ],
      difficultes: "Optimisation des performances pour un score Lighthouse élevé et gestion de l'authentification sécurisée.",
      solutionsApportees: "Utilisation de techniques de lazy loading, optimisation des images et implémentation de Firebase Auth.",
      ameliorations: "Intégration d'IA pour recommandations produits et migration vers une architecture microservices."
    }
  },
  {
    id: "habittrack",
    title: "HabitTrack",
    slug: "habittrack",
    description: "Application de suivi d'habitudes journalières et journaling pour améliorer la discipline.",
    tech: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
    category: "Front-end",
    github: "https://github.com/Rachadelbaraka/Trackrad",
    featured: false,
    e5: {
      contexte: "Application personnelle pour suivre les habitudes quotidiennes et gérer un journal.",
      objectifs: [
        "Améliorer la discipline utilisateur",
        "Suivre des routines quotidiennes",
        "Centraliser habitudes et réflexions"
      ],
      problematique: "Manque d'outils simples pour suivre les habitudes et réfléchir quotidiennement.",
      solutions: "Application React avec stockage local et interface intuitive.",
      demarcheTechnique: {
        architecture: "Application client-side avec stockage local.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        baseDonnees: "Local Storage pour la persistance des données.",
        securite: "Données stockées localement, pas de transmission réseau."
      },
      methodologie: ["Méthode Kanban", "Versionnement Git"],
      competencesBTS: {
        "1.3": "Développer la présence en ligne : Interface web moderne.",
        "1.4": "Travailler en mode projet : Gestion autonome du développement.",
        "1.6": "Organiser son développement professionnel : Apprentissage des bonnes pratiques UX."
      },
      resultats: [
        "Interface intuitive et responsive",
        "Suivi efficace des habitudes",
        "Expérience utilisateur fluide"
      ],
      difficultes: "Gestion de l'état complexe pour les habitudes multiples.",
      solutionsApportees: "Utilisation de hooks React et optimisation de la logique d'état.",
      ameliorations: "Ajout de synchronisation cloud et fonctionnalités sociales."
    }
  },
  {
    id: "enterprise-rag-pipeline",
    title: "Enterprise RAG Pipeline",
    slug: "enterprise-rag-pipeline",
    description: "Pipeline IA pour traitement de documents d'entreprise avec systèmes distribués.",
    tech: ["Python", "Go", "Docker", "APIs IA"],
    category: "IA/Systèmes",
    github: "https://github.com/Rachadelbaraka/enterprise-rag-pipeline",
    featured: false,
    e5: {
      contexte: "Pipeline de Retrieval-Augmented Generation pour automatiser l'extraction d'informations.",
      objectifs: [
        "Développer un système distribué pour traitement parallèle",
        "Intégrer modèles IA pour génération de réponses",
        "Assurer sécurité et confidentialité"
      ],
      problematique: "Méthodes traditionnelles lentes et imprécises pour la recherche dans documents.",
      solutions: "Pipeline distribué avec workers Go et APIs IA.",
      demarcheTechnique: {
        architecture: "Système distribué avec queue de messages et workers parallèles.",
        stack: ["Python", "Go", "Docker"],
        baseDonnees: "PostgreSQL pour métadonnées.",
        api: "APIs OpenAI pour génération IA.",
        securite: "Chiffrement des communications et accès contrôlé."
      },
      methodologie: ["DevOps", "CI/CD", "Tests automatisés"],
      competencesBTS: {
        "1.1": "Gérer le patrimoine informatique : Maintenance infrastructures distribuées.",
        "1.2": "Répondre aux incidents : Monitoring et résolution pannes.",
        "1.4": "Travailler en mode projet : Coordination équipe virtuelle.",
        "1.5": "Mettre à disposition un service : Déploiement haute disponibilité."
      },
      resultats: [
        "Traitement 10k+ documents/jour",
        "Précision 95%",
        "Réduction temps réponse 50%"
      ],
      difficultes: "Latence réseau et sécurisation APIs IA.",
      solutionsApportees: "Mécanismes retry et chiffrement.",
      ameliorations: "Modèles IA locaux pour réduire dépendances."
    }
  },
  {
    id: "mindful-journal",
    title: "Mindful Journal",
    slug: "mindful-journal",
    description: "PWA pour journalisation personnelle avec assistance IA.",
    tech: ["TypeScript", "JavaScript", "Supabase", "Vercel"],
    category: "PWA/IA",
    github: "https://github.com/Rachadelbaraka/mindful-journal",
    featured: false,
    e5: {
      contexte: "Application PWA pour suivre pensées et émotions avec IA.",
      objectifs: [
        "Créer app offline-first avec synchro cloud",
        "Intégrer IA pour insights",
        "Expérience fluide mobile/desktop"
      ],
      problematique: "Apps existantes manquent d'intelligence et offline.",
      solutions: "PWA avec Service Workers et APIs IA.",
      demarcheTechnique: {
        architecture: "PWA client-serveur.",
        stack: ["TypeScript", "JavaScript", "Supabase"],
        baseDonnees: "Supabase pour données utilisateurs.",
        api: "APIs IA pour analyse texte.",
        securite: "Conformité GDPR."
      },
      methodologie: ["Kanban", "Versionnement Git"],
      competencesBTS: {
        "1.3": "Développer la présence en ligne : App web moderne.",
        "1.4": "Travailler en mode projet : Gestion autonome.",
        "1.5": "Mettre à disposition un service : Déploiement maintenance.",
        "1.6": "Organiser son développement professionnel : Apprentissage PWA/IA."
      },
      resultats: [
        "200+ utilisateurs actifs",
        "Retours positifs insights IA"
      ],
      difficultes: "Performances mobiles et données sensibles.",
      solutionsApportees: "Lazy loading et GDPR.",
      ameliorations: "Fonctionnalités sociales et wearables."
    }
  },
  {
    id: "go-distributed-orderbook",
    title: "Go Distributed Orderbook",
    slug: "go-distributed-orderbook",
    description: "Système de trading haute performance distribué.",
    tech: ["Go", "Rust", "PostgreSQL", "Docker"],
    category: "Systèmes",
    github: "https://github.com/Rachadelbaraka/go-distributed-orderbook",
    featured: false,
    e5: {
      contexte: "Système simulé pour ordres trading temps réel.",
      objectifs: [
        "Implémenter orderbook distribué haute performance",
        "Latence minimale et haute disponibilité",
        "Simuler scénarios trading réel"
      ],
      problematique: "Systèmes centralisés ne scalent pas sous charge.",
      solutions: "Développement Go avec sharding et consensus.",
      demarcheTechnique: {
        architecture: "Distribué avec sharding et réplication.",
        stack: ["Go", "Rust", "PostgreSQL"],
        baseDonnees: "PostgreSQL pour persistance.",
        securite: "Consensus distribué."
      },
      methodologie: ["TDD", "CI/CD"],
      competencesBTS: {
        "1.1": "Gérer le patrimoine informatique : Maintenance nœuds.",
        "1.2": "Répondre aux incidents : Failover automatique.",
        "1.4": "Travailler en mode projet : Développement itératif.",
        "1.5": "Mettre à disposition un service : Déploiement cluster."
      },
      resultats: [
        "100k+ transactions/seconde",
        "Latence <10ms"
      ],
      difficultes: "Synchronisation états et conflits concurrence.",
      solutionsApportees: "Algorithmes consensus et optimisation locks.",
      ameliorations: "Blockchain pour traçabilité."
    }
  },
  {
    id: "blog-veille-tech",
    title: "Blog Veille Tech",
    slug: "blog-veille-tech",
    description: "Plateforme de veille technologique sur IA, systèmes distribués et web moderne.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    category: "Veille",
    github: "https://github.com/Rachadelbaraka/blog-veille-tech",
    featured: false,
    e5: {
      contexte: "Blog personnel pour partager recherches veille technologique.",
      objectifs: [
        "Publier articles qualité régulièrement",
        "Engager communauté développeurs",
        "Démontrer compétences communication technique"
      ],
      problematique: "Manque ressources centralisées veille en français.",
      solutions: "Blog statique avec génération automatique et SEO.",
      demarcheTechnique: {
        architecture: "Site statique JAMstack.",
        stack: ["HTML", "CSS", "JavaScript"],
        securite: "Hébergement GitHub Pages."
      },
      methodologie: ["Publication hebdomadaire", "Feedback lecteurs"],
      competencesBTS: {
        "1.3": "Développer la présence en ligne : Site web maintenance.",
        "1.6": "Organiser son développement professionnel : Veille continue."
      },
      resultats: [
        "50+ articles publiés",
        "Audience 1k+ visiteurs/mois"
      ],
      difficultes: "Régularité et adaptation SEO.",
      solutionsApportees: "Planification éditoriale et outils analyse.",
      ameliorations: "Fonctionnalités interactives."
    }
  }
];