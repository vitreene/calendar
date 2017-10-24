export const HAUTEUR_MIN = 15;
export const LARGEUR_MIN = 25;

export const HEURE_MIN = 9;
export const HEURE_MAX = 21;
export const INTERVALLE = 30;

export const HORAIRE_MIN = 0;
export const HORAIRE_MAX = (HEURE_MAX - HEURE_MIN) * 60; // 720;
export const CONTENEUR_L = 600;
export const CONTENEUR_H = HORAIRE_MAX;

export const QTE_MIN = 1;
export const QTE_MAX = (CONTENEUR_L * CONTENEUR_H) / (HAUTEUR_MIN * LARGEUR_MIN);
export const QTE__COL_MAX = CONTENEUR_L / LARGEUR_MIN; // 24

export const SAMPLE = {
    item: 'Sample Item',
    location: 'Sample location'
};

// de coté pour le moment.
export const STATUT = {
    TOO_MUCH: 'too much cols',
    LOW: 'low',
    HIGH: 'high',
    TRES_TOT: 'très tot',
    TRES_TARD: 'très tard',
    TOT: 'tot',
    TARD: 'tard',
    JOUR: 'jour',
    BUREAU: 'bureau',
    COURT: 'court',
    REJECTED: 'rejected',
    ACCEPTED: 'accepted',
    DEFAUT: 'defaut'
}