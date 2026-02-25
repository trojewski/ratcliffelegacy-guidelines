/**
 * Ratcliffe Legacy Foundation Brand Guidelines Site
 * Loads assets from assets.json (or uses embedded fallback when opened as file)
 */

const ASSETS_FALLBACK = {"Logo":{"images":[{"name":"Brandmark-Default","formats":[{"path":"Final Assets/Logo/Brandmark/SVG/Brandmark-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Brandmark/PNG/Brandmark-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Brandmark/SVG/Brandmark-Default.svg"},{"name":"Brandmark-White","formats":[{"path":"Final Assets/Logo/Brandmark/SVG/Brandmark-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Brandmark/PNG/Brandmark-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Brandmark/SVG/Brandmark-White.svg"},{"name":"Badge-Hands-Default","formats":[{"path":"Final Assets/Logo/Badge/Hands/SVG/Badge-Hands-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Hands/PNG/Badge-Hands-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Hands/SVG/Badge-Hands-Default.svg"},{"name":"Badge-Hands-White","formats":[{"path":"Final Assets/Logo/Badge/Hands/SVG/Badge-Hands-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Hands/PNG/Badge-Hands-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Hands/SVG/Badge-Hands-White.svg"},{"name":"Badge-Leaves-Default","formats":[{"path":"Final Assets/Logo/Badge/Leaves/SVG/Badge-Leaves-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Leaves/PNG/Badge-Leaves-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Leaves/SVG/Badge-Leaves-Default.svg"},{"name":"Badge-Leaves-White","formats":[{"path":"Final Assets/Logo/Badge/Leaves/SVG/Badge-Leaves-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Leaves/PNG/Badge-Leaves-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Leaves/SVG/Badge-Leaves-White.svg"},{"name":"Badge-Tagline-Default","formats":[{"path":"Final Assets/Logo/Badge/Tagline/SVG/Badge-Tagline-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Tagline/PNG/Badge-Tagline-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Tagline/SVG/Badge-Tagline-Default.svg"},{"name":"Badge-Tagline-White","formats":[{"path":"Final Assets/Logo/Badge/Tagline/SVG/Badge-Tagline-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Badge/Tagline/PNG/Badge-Tagline-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Badge/Tagline/SVG/Badge-Tagline-White.svg"},{"name":"Initials-Horizontal-Default","formats":[{"path":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Horizontal/PNG/Initials-Horizontal-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-Default.svg"},{"name":"Initials-Horizontal-Green","formats":[{"path":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-Green.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Horizontal/PNG/Initials-Horizontal-Green.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-Green.svg"},{"name":"Initials-Horizontal-White","formats":[{"path":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Horizontal/PNG/Initials-Horizontal-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Horizontal/SVG/Initials-Horizontal-White.svg"},{"name":"Initials-Vertical-Default","formats":[{"path":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Vertical/PNG/Initials-Vertical-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-Default.svg"},{"name":"Initials-Vertical-Green","formats":[{"path":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-Green.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Vertical/PNG/Initials-Vertical-Green.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-Green.svg"},{"name":"Initials-Vertical-White","formats":[{"path":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Vertical/PNG/Initials-Vertical-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Vertical/SVG/Initials-Vertical-White.svg"},{"name":"Initials-Stairstep-Default","formats":[{"path":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Stairstep/PNG/Initials-Stairstep-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-Default.svg"},{"name":"Initials-Stairstep-Green","formats":[{"path":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-Green.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Stairstep/PNG/Initials-Stairstep-Green.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-Green.svg"},{"name":"Initials-Stairstep-White","formats":[{"path":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Initials/Stairstep/PNG/Initials-Stairstep-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Initials/Stairstep/SVG/Initials-Stairstep-White.svg"},{"name":"Logo-Horizontal-TwoLine-Left-Default","formats":[{"path":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-TwoLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Horizontal/PNG/Logo-Horizontal-TwoLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-TwoLine-Left-Default.svg"},{"name":"Logo-Horizontal-TwoLine-Left-White","formats":[{"path":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-TwoLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Horizontal/PNG/Logo-Horizontal-TwoLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-TwoLine-Left-White.svg"},{"name":"Logo-Horizontal-ThreeLine-Left-Default","formats":[{"path":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-ThreeLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Horizontal/PNG/Logo-Horizontal-ThreeLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-ThreeLine-Left-Default.svg"},{"name":"Logo-Horizontal-ThreeLine-Left-White","formats":[{"path":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-ThreeLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Horizontal/PNG/Logo-Horizontal-ThreeLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Horizontal/SVG/Logo-Horizontal-ThreeLine-Left-White.svg"},{"name":"Logo-Vertical-TwoLine-Left-Default","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-TwoLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Left-Default.svg"},{"name":"Logo-Vertical-TwoLine-Left-White","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-TwoLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Left-White.svg"},{"name":"Logo-Vertical-TwoLine-Center-Default","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Center-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-TwoLine-Center-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Center-Default.svg"},{"name":"Logo-Vertical-TwoLine-Center-White","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Center-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-TwoLine-Center-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-TwoLine-Center-White.svg"},{"name":"Logo-Vertical-ThreeLine-Left-Default","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-ThreeLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Left-Default.svg"},{"name":"Logo-Vertical-ThreeLine-Left-White","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-ThreeLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Left-White.svg"},{"name":"Logo-Vertical-ThreeLine-Center-Default","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Center-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-ThreeLine-Center-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Center-Default.svg"},{"name":"Logo-Vertical-ThreeLine-Center-White","formats":[{"path":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Center-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Logo/Vertical/PNG/Logo-Vertical-ThreeLine-Center-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Logo/Vertical/SVG/Logo-Vertical-ThreeLine-Center-White.svg"},{"name":"Wordmark-TwoLine-Left-Default","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-TwoLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Left-Default.svg"},{"name":"Wordmark-TwoLine-Left-White","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-TwoLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Left-White.svg"},{"name":"Wordmark-TwoLine-Center-Default","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Center-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-TwoLine-Center-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Center-Default.svg"},{"name":"Wordmark-TwoLine-Center-White","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Center-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-TwoLine-Center-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-TwoLine-Center-White.svg"},{"name":"Wordmark-ThreeLine-Left-Default","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Left-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-ThreeLine-Left-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Left-Default.svg"},{"name":"Wordmark-ThreeLine-Left-White","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Left-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-ThreeLine-Left-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Left-White.svg"},{"name":"Wordmark-ThreeLine-Center-Default","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Center-Default.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-ThreeLine-Center-Default.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Center-Default.svg"},{"name":"Wordmark-ThreeLine-Center-White","formats":[{"path":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Center-White.svg","ext":"svg"},{"path":"Final Assets/Logo/Wordmark/PNG/Wordmark-ThreeLine-Center-White.png","ext":"png"}],"thumbnail":"Final Assets/Logo/Wordmark/SVG/Wordmark-ThreeLine-Center-White.svg"}],"rippleMonograms":[{"name":"RippleMonogram-Light-Red-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/PNG/RippleMonogram-Light-Red-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Red-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/PNG/RippleMonogram-Light-Red-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Red-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/PNG/RippleMonogram-Light-Red-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Red-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/SVG/RippleMonogram-Light-Red-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Red/PNG/RippleMonogram-Light-Red-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Green-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/PNG/RippleMonogram-Light-Green-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Green-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/PNG/RippleMonogram-Light-Green-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Green-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/PNG/RippleMonogram-Light-Green-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Green-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/SVG/RippleMonogram-Light-Green-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Green/PNG/RippleMonogram-Light-Green-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Blue-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/PNG/RippleMonogram-Light-Blue-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Blue-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/PNG/RippleMonogram-Light-Blue-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Blue-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/PNG/RippleMonogram-Light-Blue-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Blue-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/SVG/RippleMonogram-Light-Blue-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Blue/PNG/RippleMonogram-Light-Blue-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Gray-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/PNG/RippleMonogram-Light-Gray-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Gray-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/PNG/RippleMonogram-Light-Gray-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Light-Gray-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/PNG/RippleMonogram-Light-Gray-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Light-Gray-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/SVG/RippleMonogram-Light-Gray-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Light Mode/Gray/PNG/RippleMonogram-Light-Gray-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Red-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/PNG/RippleMonogram-Dark-Red-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Red-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/PNG/RippleMonogram-Dark-Red-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Red-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/PNG/RippleMonogram-Dark-Red-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Red-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/SVG/RippleMonogram-Dark-Red-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Red/PNG/RippleMonogram-Dark-Red-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Green-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/PNG/RippleMonogram-Dark-Green-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Green-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/PNG/RippleMonogram-Dark-Green-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Green-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/PNG/RippleMonogram-Dark-Green-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Green-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/SVG/RippleMonogram-Dark-Green-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Green/PNG/RippleMonogram-Dark-Green-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Blue-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/PNG/RippleMonogram-Dark-Blue-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Blue-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/PNG/RippleMonogram-Dark-Blue-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Blue-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/PNG/RippleMonogram-Dark-Blue-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Blue-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/SVG/RippleMonogram-Dark-Blue-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Blue/PNG/RippleMonogram-Dark-Blue-TopRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Gray-BottomLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-BottomLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-BottomLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/PNG/RippleMonogram-Dark-Gray-BottomLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Gray-BottomRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-BottomRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-BottomRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/PNG/RippleMonogram-Dark-Gray-BottomRight.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Gray-TopLeft","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-TopLeft.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-TopLeft.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/PNG/RippleMonogram-Dark-Gray-TopLeft.png","ext":"png"}]},{"name":"RippleMonogram-Dark-Gray-TopRight","thumbnail":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-TopRight.svg","formats":[{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/SVG/RippleMonogram-Dark-Gray-TopRight.svg","ext":"svg"},{"path":"Final Assets/Logo/Ripple Monogram/Dark Mode/Gray/PNG/RippleMonogram-Dark-Gray-TopRight.png","ext":"png"}]}]},"Ripple Graphic":{"images":[{"name":"Ripple-Solid-Blue","formats":[{"path":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Blue.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Solid/PNG/Ripple-Solid-Blue.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Blue.svg"},{"name":"Ripple-Solid-Gray","formats":[{"path":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Gray.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Solid/PNG/Ripple-Solid-Gray.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Gray.svg"},{"name":"Ripple-Solid-Green","formats":[{"path":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Green.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Solid/PNG/Ripple-Solid-Green.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Green.svg"},{"name":"Ripple-Solid-Red","formats":[{"path":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Red.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Solid/PNG/Ripple-Solid-Red.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Solid/SVG/Ripple-Solid-Red.svg"},{"name":"Ripple-Light-Blue","formats":[{"path":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Blue.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Light/PNG/Ripple-Light-Blue.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Blue.svg"},{"name":"Ripple-Light-Gray","formats":[{"path":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Gray.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Light/PNG/Ripple-Light-Gray.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Gray.svg"},{"name":"Ripple-Light-Green","formats":[{"path":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Green.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Light/PNG/Ripple-Light-Green.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Green.svg"},{"name":"Ripple-Light-Red","formats":[{"path":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Red.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Light/PNG/Ripple-Light-Red.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Light/SVG/Ripple-Light-Red.svg"},{"name":"Ripple-Dark-Blue","formats":[{"path":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Blue.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Dark/PNG/Ripple-Dark-Blue.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Blue.svg"},{"name":"Ripple-Dark-Gray","formats":[{"path":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Gray.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Dark/PNG/Ripple-Dark-Gray.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Gray.svg"},{"name":"Ripple-Dark-Green","formats":[{"path":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Green.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Dark/PNG/Ripple-Dark-Green.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Green.svg"},{"name":"Ripple-Dark-Red","formats":[{"path":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Red.svg","ext":"svg"},{"path":"Final Assets/Ripple Graphic/Dark/PNG/Ripple-Dark-Red.png","ext":"png"}],"thumbnail":"Final Assets/Ripple Graphic/Dark/SVG/Ripple-Dark-Red.svg"}]},"Social Media Icons":{"images":[{"name":"Green-On-White","formats":[{"path":"Final Assets/Social Media Icons/PNG/Green-On-White.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/Green-On-White.png"},{"name":"Green-On-Yellow","formats":[{"path":"Final Assets/Social Media Icons/PNG/Green-On-Yellow.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/Green-On-Yellow.png"},{"name":"White-On-Blue","formats":[{"path":"Final Assets/Social Media Icons/PNG/White-On-Blue.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/White-On-Blue.png"},{"name":"White-On-Gray","formats":[{"path":"Final Assets/Social Media Icons/PNG/White-On-Gray.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/White-On-Gray.png"},{"name":"White-On-Green","formats":[{"path":"Final Assets/Social Media Icons/PNG/White-On-Green.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/White-On-Green.png"},{"name":"White-On-Red","formats":[{"path":"Final Assets/Social Media Icons/PNG/White-On-Red.png","ext":"png"}],"thumbnail":"Final Assets/Social Media Icons/PNG/White-On-Red.png"}]},"Fonts":{"jubilat":[{"name":"Jubilat ExtraLight","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilExtLig.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtraLight.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtraLight.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtraLight.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat ExtraLight Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilExtLigIta.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtralightItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtralightItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-ExtralightItalic.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Light","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-Light.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Light.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Light.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Light.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Light Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-LightItalic.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-LightItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-LightItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-LightItalic.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Regular","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-Regular.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Regular.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Regular.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Regular.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Regular Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-RegularItalic.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-RegularItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-RegularItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-RegularItalic.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Medium","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilMed.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Medium.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Medium.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Medium.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Medium Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilMedIta.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-MediumItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-MediumItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-MediumItalic.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Bold","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-Bold.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Bold.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Bold.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Bold.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Bold Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/Jubilat-BoldItalic.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BoldItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BoldItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BoldItalic.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Black","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilBla.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Black.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Black.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-Black.ttf","ext":"TTF","type":"Web"}]},{"name":"Jubilat Black Italic","formats":[{"path":"Final Assets/Fonts/Jubilat/Desktop Fonts/JubilBlaIta.otf","ext":"OTF","type":"Desktop"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BlackItalic.woff2","ext":"WOFF2","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BlackItalic.woff","ext":"WOFF","type":"Web"},{"path":"Final Assets/Fonts/Jubilat/Web Fonts/Jubilat-BlackItalic.ttf","ext":"TTF","type":"Web"}]}],"lexend":[{"name":"Lexend Black","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Black.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend Bold","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Bold.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend ExtraBold","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-ExtraBold.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend ExtraLight","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-ExtraLight.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend Light","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Light.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend Medium","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Medium.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend Regular","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Regular.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend SemiBold","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-SemiBold.ttf","ext":"TTF","type":"Desktop"}]},{"name":"Lexend Thin","formats":[{"path":"Final Assets/Fonts/Lexend/Lexend-Thin.ttf","ext":"TTF","type":"Desktop"}]}]}};

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('assets-content');
  if (!container) return;

  try {
    const res = await fetch('assets.json');
    const data = res.ok ? await res.json() : ASSETS_FALLBACK;
    container.innerHTML = renderAssets(data);
  } catch {
    container.innerHTML = renderAssets(ASSETS_FALLBACK);
  }
});

function groupLogoAssets(assets) {
  const groups = {};
  for (const asset of assets) {
    const subsection = getLogoSubsection(asset.name);
    if (!groups[subsection]) groups[subsection] = [];
    groups[subsection].push(asset);
  }
  return groups;
}

function getLogoSubsection(name) {
  if (name.startsWith('Badge-')) return 'Badge';
  if (name.startsWith('Brandmark-')) return 'Brandmark';
  if (name.startsWith('Initials-')) return 'Initials';
  if (name.startsWith('Logo-')) return 'Logo';
  if (name.startsWith('RippleMonogram-')) return 'Ripple Monogram';
  if (name.startsWith('Wordmark-')) return 'Wordmark';
  return 'Other';
}

function renderAssets(data) {
  let html = '';

  // Logo images with subsections
  if (data.Logo) {
    html += '<div class="assets-category"><h3>Logos</h3>';
    const logoAssets = [
      ...(data.Logo.images || []),
      ...(data.Logo.rippleMonograms || [])
    ];
    const logoSubsections = groupLogoAssets(logoAssets);
    const subsectionOrder = ['Brandmark', 'Badge', 'Logo', 'Wordmark', 'Initials', 'Ripple Monogram'];
    for (const key of subsectionOrder) {
      const assets = logoSubsections[key];
      if (assets && assets.length) {
        html += `<div class="asset-subsection"><h4>${key}</h4><div class="asset-grid">`;
        for (const asset of assets) {
          html += renderImageCard(asset);
        }
        html += '</div></div>';
      }
    }
    html += '</div>';
  }

  // Business Card (if from generator)
  if (data['Business Card'] && data['Business Card'].images?.length) {
    html += '<div class="assets-category"><h3>Business Card</h3>';
    html += '<div class="asset-grid">';
    for (const asset of data['Business Card'].images) {
      html += renderImageCard(asset);
    }
    html += '</div></div>';
  }

  // Ripple Graphic
  if (data['Ripple Graphic']) {
    html += '<div class="assets-category"><h3>Ripple Graphics</h3>';
    html += '<div class="asset-grid">';
    for (const asset of data['Ripple Graphic'].images || []) {
      html += renderImageCard(asset);
    }
    html += '</div></div>';
  }

  // Social Media Icons
  if (data['Social Media Icons']) {
    html += '<div class="assets-category"><h3>Social Media Icons</h3>';
    html += '<div class="asset-grid">';
    for (const asset of data['Social Media Icons'].images || []) {
      html += renderImageCard(asset);
    }
    html += '</div></div>';
  }

  // Fonts
  if (data.Fonts) {
    html += '<div class="assets-category"><h3>Fonts</h3>';
    
    const jubilatFonts = sortFontsByWeight(
      data.Fonts.jubilat || (data.Fonts.fonts || []).filter(f => f.family === 'Jubilat'),
      'Jubilat'
    );
    const lexendFonts = sortFontsByWeight(
      data.Fonts.lexend || (data.Fonts.fonts || []).filter(f => f.family === 'Lexend'),
      'Lexend'
    );
    injectFontFaceRules([...jubilatFonts, ...lexendFonts]);

    if (jubilatFonts.length) {
      html += '<div class="font-family-section"><h4>Jubilat</h4><div class="asset-grid">';
      for (const font of jubilatFonts) {
        html += renderFontCard(font, 'Jubilat');
      }
      html += '</div></div>';
    }
    if (lexendFonts.length) {
      html += '<div class="font-family-section"><h4>Lexend</h4><div class="asset-grid">';
      for (const font of lexendFonts) {
        html += renderFontCard(font, 'Lexend');
      }
      html += '</div></div>';
    }
    html += '</div>';
  }

  return html || '<p>No assets found.</p>';
}

function renderImageCard(asset) {
  const thumbnail = asset.thumbnail || (asset.formats && asset.formats[0]?.path);
  const formats = asset.formats || [];
  
  let downloadLinks = '';
  for (const fmt of formats) {
    downloadLinks += `<a href="${escapeAttr(fmt.path)}" download="${escapeAttr(getFileName(fmt.path))}">${fmt.ext.toUpperCase()}</a>`;
  }

  return `
    <div class="asset-card">
      <div class="asset-thumb">
        <img src="${escapeAttr(thumbnail)}" alt="${escapeAttr(asset.name)}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=color:#696663>Preview</span>'">
      </div>
      <div class="asset-info">
        <div class="asset-name">${escapeHtml(asset.name)}</div>
        <div class="asset-downloads">${downloadLinks}</div>
      </div>
    </div>
  `;
}

function renderFontCard(font, family) {
  const formats = font.formats || (font.path ? [{ path: font.path, ext: font.ext || 'Download' }] : []);
  let downloadLinks = '';
  for (const fmt of formats) {
    downloadLinks += `<a href="${escapeAttr(fmt.path)}" download="${escapeAttr(getFileName(fmt.path))}">${(fmt.ext || 'Download').toUpperCase()}</a>`;
  }
  const fallback = family === 'Jubilat' ? 'serif' : 'sans-serif';
  const fontFamilyStyle = getWebFontPath(font)
    ? `font-family: '${String(font.name).replace(/'/g, "\\'")}', ${fallback}; font-weight: normal; font-style: normal;`
    : '';
  return `
    <div class="asset-card">
      <div class="asset-thumb font-thumb" style="${fontFamilyStyle}">Aa</div>
      <div class="asset-info">
        <div class="asset-name">${escapeHtml(font.name)}</div>
        <div class="asset-downloads">${downloadLinks}</div>
      </div>
    </div>
  `;
}

function escapeAttr(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getFileName(path) {
  return path ? path.split('/').pop() : 'download';
}

// Font weight order (lightest to heaviest) for sorting
const FONT_WEIGHT_ORDER = {
  Thin: 100, ExtraLight: 200, Extralight: 200, Light: 300, Regular: 400,
  Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900
};

function getFontSortKey(fontName, family) {
  const name = fontName.replace(family + ' ', '');
  const isItalic = name.includes('Italic');
  const baseName = name.replace(' Italic', '');
  const weight = FONT_WEIGHT_ORDER[baseName] ?? 400;
  return (weight * 10) + (isItalic ? 1 : 0);
}

function sortFontsByWeight(fonts, family) {
  return [...fonts].sort((a, b) => getFontSortKey(a.name, family) - getFontSortKey(b.name, family));
}

function getWebFontPath(font) {
  const formats = font.formats || [];
  const web = formats.find(f => f.ext === 'WOFF2' || f.ext === 'WOFF' || (f.ext === 'TTF' && f.type === 'Web'));
  const any = formats.find(f => ['WOFF2', 'WOFF', 'TTF'].includes(f.ext));
  const fmt = web || any;
  return fmt ? fmt.path : null;
}

function injectFontFaceRules(fonts) {
  const rules = [];
  for (const font of fonts) {
    const path = getWebFontPath(font);
    if (!path) continue;
    const format = path.endsWith('.woff2') ? 'woff2' : path.endsWith('.woff') ? 'woff' : 'truetype';
    const escapedName = font.name.replace(/'/g, "\\'");
    rules.push(`@font-face{font-family:'${escapedName}';src:url('${path}') format('${format}');font-weight:normal;font-style:normal;}`);
  }
  if (rules.length) {
    let style = document.getElementById('font-asset-faces');
    if (!style) {
      style = document.createElement('style');
      style.id = 'font-asset-faces';
      document.head.appendChild(style);
    }
    style.textContent = rules.join('');
  }
}
