const animals = document.getElementById('animals');
const celeba = document.getElementById('celeba');
const flowers = document.getElementById('flowers');
const layersSelector = document.getElementById('layersSelector');

var selectedType = 'animals';
var selectedLayer = '';

export default function lucidFunction() {
  animals.onclick = selectType;
  celeba.onclick = selectType;
  flowers.onclick = selectType;

  console.log(layersSelector);
  const layersDiv = document.getElementById('layers');

  selectLayer(0);

  layers.forEach((i, n) => {
    var layerLink = document.createElement('a');
    layerLink.className = 'dropdown-item';
    layerLink.innerHTML = i.layer.split('/')[1];

    layerLink.id = n;
    layersDiv.appendChild(layerLink);

    layersDiv.onclick = function(e) {
      selectLayer(e.target.id);
      console.log(e.target);
    };
  });
}

function selectType(e) {
  var type = e.target.id;

  animals.classList.remove('active');
  celeba.classList.remove('active');
  flowers.classList.remove('active');
  document.getElementById(type).classList.add('active');

  selectedType = type;
  loadImages();
}

function selectLayer(target) {
  layersSelector.innerHTML = layers[target].layer.split('/')[1];
  selectedLayer = layers[target];
  loadImages();
}

function loadImages() {
  document.getElementById('lucidImages').innerHTML = '';
  for (var i = 0; i < selectedLayer.size; i++) {
    var link =
      'https://users.renyi.hu/~daniel/tmp/lucid/catalogs/' +
      selectedType +
      '_' +
      selectedLayer.layer +
      '/' +
      selectedLayer.layer.split('/')[1] +
      '_' +
      i;

    loadImage(link, i);
  }
}

function loadImage(link, i) {
  var img = new Image();
  img.src = link + '_googlenet_finetuned.pb.png';

  var img2 = new Image();
  img2.src = link + '_googlenet_default.pb.png';

  var containers = document.createElement('div');
  containers.className = 'neuron mt-5 col-lg-4 col-md-6 col-sm-12';

  var imageContainers = document.createElement('div');
  imageContainers.className = 'face';
  imageContainers.appendChild(img);
  imageContainers.appendChild(img2);

  containers.appendChild(imageContainers);

  var title = document.createElement('h4');
  title.className = 'text-center';
  title.innerHTML = '<b>' + i + '</b>';
  containers.appendChild(title);

  document.getElementById('lucidImages').appendChild(containers);
}

export const layers = [
  {
    layer: 'neuron_catalog_1-20/Conv2d_1a_7x7_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_1-20/Conv2d_2b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_1-20/Conv2d_2c_3x3_act-Relu',
    size: '192',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_1_a_1x1_act-Relu',
    size: '96',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_2_a_1x1_act-Relu',
    size: '16',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_0_a_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_1_b_3x3_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_2_b_3x3_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3b_Branch_3_b_1x1_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_1_a_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_2_a_1x1_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_0_a_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_1_b_3x3_act-Relu',
    size: '192',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_2_b_3x3_act-Relu',
    size: '96',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_3c_Branch_3_b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_4b_Branch_1_a_1x1_act-Relu',
    size: '96',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_4b_Branch_2_a_1x1_act-Relu',
    size: '16',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_4b_Branch_0_a_1x1_act-Relu',
    size: '192',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_4b_Branch_1_b_3x3_act-Relu',
    size: '208',
  },
  {
    layer: 'neuron_catalog_1-20/Mixed_4b_Branch_2_b_3x3_act-Relu',
    size: '48',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4b_Branch_3_b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_1_a_1x1_act-Relu',
    size: '112',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_2_a_1x1_act-Relu',
    size: '24',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_0_a_1x1_act-Relu',
    size: '160',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_1_b_3x3_act-Relu',
    size: '224',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_2_b_3x3_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4c_Branch_3_b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4d_Branch_1_a_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4d_Branch_2_a_1x1_act-Relu',
    size: '24',
  },
  {
    layer: 'neuron_catalog_21-30/Mixed_4d_Branch_0_a_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4d_Branch_1_b_3x3_act-Relu',
    size: '256',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4d_Branch_2_b_3x3_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4d_Branch_3_b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_1_a_1x1_act-Relu',
    size: '144',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_2_a_1x1_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_0_a_1x1_act-Relu',
    size: '112',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_1_b_3x3_act-Relu',
    size: '288',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_2_b_3x3_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4e_Branch_3_b_1x1_act-Relu',
    size: '64',
  },
  {
    layer: 'neuron_catalog_31-40/Mixed_4f_Branch_1_a_1x1_act-Relu',
    size: '160',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_4f_Branch_2_a_1x1_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_4f_Branch_0_a_1x1_act-Relu',
    size: '256',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_4f_Branch_1_b_3x3_act-Relu',
    size: '320',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_4f_Branch_2_b_3x3_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_4f_Branch_3_b_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_5b_Branch_1_a_1x1_act-Relu',
    size: '160',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_5b_Branch_2_a_1x1_act-Relu',
    size: '32',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_5b_Branch_0_a_1x1_act-Relu',
    size: '256',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_5b_Branch_1_b_3x3_act-Relu',
    size: '320',
  },
  {
    layer: 'neuron_catalog_41-50/Mixed_5b_Branch_2_b_3x3_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5b_Branch_3_b_1x1_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_1_a_1x1_act-Relu',
    size: '192',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_2_a_1x1_act-Relu',
    size: '48',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_0_a_1x1_act-Relu',
    size: '384',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_1_b_3x3_act-Relu',
    size: '384',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_2_b_3x3_act-Relu',
    size: '128',
  },
  {
    layer: 'neuron_catalog_51-57/Mixed_5c_Branch_3_b_1x1_act-Relu',
    size: '128',
  },
];
