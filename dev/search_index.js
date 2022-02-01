var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [GeoArrayOps]\nOrder   = [:function, :type]","category":"page"},{"location":"reference/#GeoArrayOps.TPI-Tuple{AbstractMatrix{var\"#s84\"} where var\"#s84\"<:Real}","page":"Reference","title":"GeoArrayOps.TPI","text":"TPI(dem::Matrix{<:Real})\n\nTPI stands for Topographic Position Index, which is defined as the difference between a central pixel and the mean of its surrounding cells (see Wilson et al 2007, Marine Geodesy 30:3-35).\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.TRI-Tuple{AbstractMatrix{var\"#s84\"} where var\"#s84\"<:Real}","page":"Reference","title":"GeoArrayOps.TRI","text":"TRI(dem::Matrix{<:Real})\n\nTRI stands for Terrain Ruggedness Index, which measures the difference between a central pixel and its surrounding cells. This algorithm uses the square root of the sum of the square of the difference between a central pixel and its surrounding cells. This is recommended for terrestrial use cases.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.opening!-Union{Tuple{T}, Tuple{Matrix{T}, Integer, Matrix{T}}} where T<:Real","page":"Reference","title":"GeoArrayOps.opening!","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.opening-Union{Tuple{T}, Tuple{Matrix{T}, Integer}} where T<:Real","page":"Reference","title":"GeoArrayOps.opening","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.opening_circ!-Union{Tuple{T}, Tuple{Matrix{T}, Integer, Matrix{T}}} where T<:Real","page":"Reference","title":"GeoArrayOps.opening_circ!","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.pitremoval","page":"Reference","title":"GeoArrayOps.pitremoval","text":"pitremoval(dem::Matrix{<:Real})\n\nRemove pits from a DEM Array if the center cell of a 3x3 patch is limit lower or than the surrounding cells.\n\n\n\n\n\n","category":"function"},{"location":"reference/#GeoArrayOps.pmf-Union{Tuple{AbstractMatrix{T}}, Tuple{T}} where T<:Real","page":"Reference","title":"GeoArrayOps.pmf","text":"B, flags = pmf(A; ωₘ, slope, dhₘ, dh₀, cellsize)\n\nApplies the progressive morphological filter by Zhang et al. (2003) [zhang2003] to A.\n\nOutput\n\nB::Array{T,2} Maximum allowable values\nflags::Array{Float64,2} A sized array with window sizes if filtered, zero if not filtered.\n\nAfterwards, one can retrieve the resulting mask for A by A .<= B or flags .== 0..\n\nArguments\n\nA::Array{T,2} Input Array\nωₘ::Float64=20. Maximum window size [m]\nslope::Float64=0.01 Terrain slope [m/m]\ndhₘ::Float64=2.5 Maximum elevation threshold [m]\ndh₀::Float64=0.2 Initial elevation threshold [m]\ncellsize::Float64=1. Cellsize in [m]\n\n[zhang2003]: Zhang, Keqi, Shu-Ching Chen, Dean Whitman, Mei-Ling Shyu, Jianhua Yan, and Chengcui Zhang. “A Progressive Morphological Filter for Removing Nonground Measurements from Airborne LIDAR Data.” IEEE Transactions on Geoscience and Remote Sensing 41, no. 4 (2003): 872–82. https://doi.org/10.1109/TGRS.2003.810682.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.psf-Union{Tuple{AbstractMatrix{T}}, Tuple{T}} where T<:Real","page":"Reference","title":"GeoArrayOps.psf","text":"B, flags = psf(A; ωₘ, slope, dhₘ, dh₀, cellsize)\n\nApplies a progressive slope filter to A.\n\nOutput\n\nB::Array{T,2} Maximum allowable values based A + slope, dhₘ, dh₀\nflags::Array{Float64,2} A sized array with window sizes if filtered, zero if not filtered.\n\nAfterwards, one can retrieve the resulting mask for A by A .<= B or flags .== 0..\n\nArguments\n\nA::Array{T,2} Input Array\nωₘ::Float64=20. Maximum window size [m]\nslope::Float64=0.01 Terrain slope [m/m]\ndhₘ::Float64=2.5 Maximum elevation threshold [m]\ndh₀::Float64=0.2 Initial elevation threshold [m]\ncellsize::Float64=1. Cellsize in [m]\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.pssm-Tuple{AbstractMatrix{var\"#s16\"} where var\"#s16\"<:Real}","page":"Reference","title":"GeoArrayOps.pssm","text":"image = pssm(A; exaggeration, resolution)\n\nPerceptually Shaded Slope Map by Pingel, Clarke. 2014 [pingel2014].\n\nOutput\n\nimage::Gray{T,2} Grayscale image\n\nArguments\n\nA::Array{Real,2} Input Array\nexaggeration::Real=2.3 Factor to exaggerate elevation\nresolution::Real=1.0 Resolution of cell size\n\n[pingel2014]: Pingel, Thomas, and Clarke, Keith. 2014. ‘Perceptually Shaded Slope Maps for the Visualization of Digital Surface Models’. Cartographica: The International Journal for Geographic Information and Geovisualization 49 (4): 225–40. https://doi.org/10/ggnthv.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.roughness-Tuple{AbstractMatrix{var\"#s84\"} where var\"#s84\"<:Real}","page":"Reference","title":"GeoArrayOps.roughness","text":"roughness(dem::Matrix{<:Real})\n\nRoughness is the largest inter-cell difference of a central pixel and its surrounding cell, as defined in Wilson et al (2007, Marine Geodesy 30:3-35).\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.smf-Union{Tuple{AbstractMatrix{T}}, Tuple{T}} where T<:Real","page":"Reference","title":"GeoArrayOps.smf","text":"B = smf(A; ω, slope, dhₘ, dh₀, cellsize)\n\nApplies the simple morphological filter by Pingel et al. (2013) [pingel2013] to A.\n\nOutput\n\nB::Array{Float64,2} A filtered version of A\n\nArguments\n\nA::Array{T,2} Input Array\nω::Float64=18. Maximum window size [m]\nslope::Float64=0.01 Terrain slope [m/m]\ncellsize::Float64=1. Cellsize in [m]\n\n[pingel2013]: Pingel, Thomas J., Keith C. Clarke, and William A. McBride. 2013. ‘An Improved Simple Morphological Filter for the Terrain Classification of Airborne LIDAR Data’. ISPRS Journal of Photogrammetry and Remote Sensing 77 (March): 21–30. https://doi.org/10.1016/j.isprsjprs.2012.12.002.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.spread-Tuple{AbstractMatrix{var\"#s49\"} where var\"#s49\"<:Real, AbstractMatrix{var\"#s48\"} where var\"#s48\"<:Real, Real}","page":"Reference","title":"GeoArrayOps.spread","text":"spread(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Real; distance=Euclidean(), res=1.0)\n\nOptimized (and more accurate) function based on the same friction everywhere.\n\nWhen the friction is the same everywhere, there's no need for searching the shortest cost path, as one can just take a direct line to the input points.\n\nThe calculated cost is more accurate, as there's no 'zigzag' from cell center to cell center.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.spread-Tuple{AbstractMatrix{var\"#s77\"} where var\"#s77\"<:Real, AbstractMatrix{var\"#s78\"} where var\"#s78\"<:Real, AbstractMatrix{var\"#s79\"} where var\"#s79\"<:Real}","page":"Reference","title":"GeoArrayOps.spread","text":"spread(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Matrix{<:Real}; res=1, limit=Inf)\n\nTotal friction distance spread from points as by Tomlin (1983) [tomlin1983]. This is also the method implemented by PCRaster.\n\nOutput\n\nArray{Float64,2} Total friction distance\n\nArguments\n\npoints::Matrix{<:Real} Input Array\ninitial::Matrix{<:Real} Factor to exaggerate elevation\nfriction::Matrix{<:Real} Resolution of cell size\nres=1 Resolution or cell size\nlimit=Inf Initial fill value\n\n[tomlin1983]: Tomlin, Charles Dana. 1983. Digital Cartographic Modeling Techniques in Environmental Planning. Yale University.\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.spread-Tuple{AbstractMatrix{var\"#s81\"} where var\"#s81\"<:Real, Real, Real}","page":"Reference","title":"GeoArrayOps.spread","text":"spread(points::Matrix{<:Real}, initial::Real, friction::Real; distance=Euclidean(), res=1.0)\n\n\n\n\n\n","category":"method"},{"location":"reference/#GeoArrayOps.spread2-Tuple{AbstractMatrix{var\"#s11\"} where var\"#s11\"<:Real, AbstractMatrix{var\"#s10\"} where var\"#s10\"<:Real, AbstractMatrix{var\"#s9\"} where var\"#s9\"<:Real}","page":"Reference","title":"GeoArrayOps.spread2","text":"spread2(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Matrix{<:Real}; res=1, limit=Inf, iterations=3)\n\nPushbroom method for friction costs as discussed by *Eastman (1989) [eastman1989]. This method should scale much better (linearly) than the [tomlin1983] method, but can require more iterations than set by default (3) in the case of maze-like, uncrossable obstacles.\n\nOutput\n\nArray{Float64,2} Total friction distance\n\nArguments\n\npoints::Matrix{<:Real} Input Array\ninitial::Matrix{<:Real} Factor to exaggerate elevation\nfriction::Matrix{<:Real} Resolution of cell size\nres=1 Resolution or cell size\nlimit=Inf Initial fill value\niterations=3 Number of pushbroom iterations\n\n[eastman1989]: Eastman, J. Ronald. 1989. ‘Pushbroom Algorithms for Calculating Distances in Raster Grids’. In Proceedings, Autocarto, 9:288–97.\n\n\n\n\n\n","category":"method"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"(Image: CI) (Image: Codecov)","category":"page"},{"location":"#GeoArrayOps","page":"GeoArrayOps","title":"GeoArrayOps","text":"","category":"section"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"Geospatial operations, cost and filtering algorithms as used in for elevation rasters.","category":"page"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"This is a work in progress","category":"page"},{"location":"#Functionality","page":"GeoArrayOps","title":"Functionality","text":"","category":"section"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"Terrain filters, such as Progressive Morphological Filters (PMF, SMF)\nGeospatial cost (friction) operations that mimic PCRaster. These functions should however be more Julian, extensible and scale better.\nVisualization, such as Perceptually Shaded Slope Map (PSSM)\nTerrain analysis functions, such as roughness, Topographic Position Index (TPI), Terrain Ruggedness Index (TRI).","category":"page"},{"location":"#Installation","page":"GeoArrayOps","title":"Installation","text":"","category":"section"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"pkg> add https://github.com/Deltares/GeoArrayOps.jl","category":"page"},{"location":"#Index","page":"GeoArrayOps","title":"Index","text":"","category":"section"},{"location":"","page":"GeoArrayOps","title":"GeoArrayOps","text":"","category":"page"}]
}
