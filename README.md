EXtractor - EXIF data Xtractor
==============================

This command line utility processes files, or directories, and extracts EXIF data to STDOUT in JSON format.
It's dependant on [ExifTool by Phil Harvey](http://owl.phy.queensu.ca/~phil/exiftool/), so make sure you have it installed before proceeding.

Options
-------

 * **-f** &mdash; allows providing either a file path, or a list of comma-separated file paths
 * **-d** &mdash; allows providing a root directory
 * **-r** &mdash; will prompt thep program to recurse to sub-directories
 * **-V** &mdash; will show the program's version
 * **-h** &mdash; will show help

```
$ ./exif.js -h
Usage: exif.js [options] <path>
  Options:
    -h, --help                  output usage information
    -V, --version               output the version number
    -f, --file <file,file,...>  Get EXIF data from file/s
    -d, --directory <path>      Get EXIF data from all files in directory
    -r, --recursive             Look for files in sub-directories
```

Examples
--------

* Single file

```
$ ./exif.js -f ~/Pictures/Me/me3.jpg
[ { file: '/Users/redacted/Pictures/Me/me3.jpg',
    exif:
     { 'exiftool version number': '9.37',
       'file name': 'me3.jpg',
       directory: '/Users/redacted/Pictures/Me',
       'file size': '310 kB',
       'file modification date time': '2013:04:28 17:23:32-07:00',
       'file access date time': '2013:04:28 17:23:32-07:00',
       'file inode change date time': '2013:04:28 17:23:32-07:00',
       'file permissions': 'rw-r--r--',
       'file type': 'JPEG',
       'mime type': 'image/jpeg',
       'jfif version': '1.01',
       'resolution unit': 'inches',
       'x resolution': '96',
       'y resolution': '96',
       'image width': '578',
       'image height': '627',
       'encoding process': 'Progressive DCT, Huffman coding',
       'bits per sample': '8',
       'color components': '3',
       'y cb cr sub sampling': 'YCbCr4:4:4 (1 1)',
       'image size': '578x627' } } ]
```

* Multiple files

```
$ ./exif.js -f ~/Pictures/Me/me3.jpg,~/Pictures/Me/PICT4050.JPG

[ { file: '/Users/redacted/Pictures/Me/me3.jpg',
    exif:
     { 'exiftool version number': '9.37',
       'file name': 'me3.jpg',
       directory: '/Users/redacted/Pictures/Me',
       'file size': '310 kB',
       'file modification date time': '2013:04:28 17:23:32-07:00',
       'file access date time': '2013:04:28 17:23:32-07:00',
       'file inode change date time': '2013:04:28 17:23:32-07:00',
       'file permissions': 'rw-r--r--',
       'file type': 'JPEG',
       'mime type': 'image/jpeg',
       'jfif version': '1.01',
       'resolution unit': 'inches',
       'x resolution': '96',
       'y resolution': '96',
       'image width': '578',
       'image height': '627',
       'encoding process': 'Progressive DCT, Huffman coding',
       'bits per sample': '8',
       'color components': '3',
       'y cb cr sub sampling': 'YCbCr4:4:4 (1 1)',
       'image size': '578x627' } },
  { file: '/Users/redacted/Pictures/Me/PICT4050.JPG',
    exif:
     { 'exiftool version number': '9.37',
       'file name': 'PICT4050.JPG',
       directory: '/Users/redacted/Pictures/Me',
       'file size': '4.7 MB',
       'file modification date time': '2004:12:06 00:26:10-08:00',
       'file access date time': '2012:01:07 19:28:45-08:00',
       'file inode change date time': '2012:01:07 19:28:45-08:00',
       'file permissions': 'rwxrwxrwx',
       'file type': 'JPEG',
       'mime type': 'image/jpeg',
       'jfif version': '1.02',
       'exif byte order': 'Big-endian (Motorola, MM)',
       'image description': 'Minolta DSC',
       make: 'Minolta Co., Ltd.',
       'camera model name': 'DiMAGE A1',
       orientation: 'Horizontal (normal)',
       'x resolution': '72',
       'y resolution': '72',
       'resolution unit': 'inches',
       software: 'Adobe Photoshop 7.0',
       'modify date': '2004:12:06 10:26:09',
       'y cb cr positioning': 'Centered',
       'printim version': '0250',
       'exposure time': '1/60',
       'f number': '3.5',
       'exposure program': 'Aperture-priority AE',
       iso: '100',
       'exif version': '0220',
       'date time original': '2004:12:03 17:02:21',
       'create date': '2004:12:03 17:02:21',
       'components configuration': 'Y, Cb, Cr, -',
       'brightness value': '4.6',
       'exposure compensation': '0',
       'max aperture value': '3.2',
       'metering mode': 'Multi-segment',
       'light source': 'Unknown',
       flash: 'Off, Did not fire',
       'focal length': '29.1 mm (35 mm equivalent: 118.0 mm)',
       'subject area': '1280 960 320 384',
       'flashpix version': '0100',
       'color space': 'sRGB',
       'exif image width': '1920',
       'exif image height': '2560',
       'custom rendered': 'Custom',
       'exposure mode': 'Auto',
       'white balance': 'Manual',
       'digital zoom ratio': '0',
       'focal length in 35mm format': '118 mm',
       'scene capture type': 'Standard',
       'gain control': 'None',
       contrast: 'Normal',
       saturation: 'Normal',
       sharpness: 'Normal',
       'subject distance range': 'Distant',
       compression: 'JPEG (old-style)',
       'thumbnail offset': '1056',
       'thumbnail length': '5613',
       'current iptc digest': '04a97be7fa6490407758337530394bde',
       'application record version': '2',
       'caption abstract': 'Minolta DSC',
       'iptc digest': '04a97be7fa6490407758337530394bde',
       'displayed units x': 'inches',
       'displayed units y': 'inches',
       'global angle': '30',
       'global altitude': '30',
       'copyright flag': 'False',
       'photoshop thumbnail': '(Binary data 5613 bytes, use -b option to extract)',
       'photoshop quality': '12',
       'photoshop format': 'Standard',
       'progressive scans': '3 Scans',
       'xmp toolkit': 'XMP toolkit 2.8.2-33, framework 1.5',
       about: 'uuid:534a1d12-4760-11d9-b71d-b23d12354da7',
       'document id': 'adobe:docid:photoshop:534a1d10-4760-11d9-b71d-b23d12354da7',
       description: 'Minolta DSC',
       'profile cmm type': 'Lino',
       'profile version': '2.1.0',
       'profile class': 'Display Device Profile',
       'color space data': 'RGB',
       'profile connection space': 'XYZ',
       'profile date time': '1998:02:09 06:49:00',
       'profile file signature': 'acsp',
       'primary platform': 'Microsoft Corporation',
       'cmm flags': 'Not Embedded, Independent',
       'device manufacturer': 'IEC',
       'device model': 'sRGB',
       'device attributes': 'Reflective, Glossy, Positive, Color',
       'rendering intent': 'Perceptual',
       'connection space illuminant': '0.9642 1 0.82491',
       'profile creator': 'HP',
       'profile id': '0',
       'profile copyright': 'Copyright (c) 1998 Hewlett-Packard Company',
       'profile description': 'sRGB IEC61966-2.1',
       'media white point': '0.95045 1 1.08905',
       'media black point': '0 0 0',
       'red matrix column': '0.43607 0.22249 0.01392',
       'green matrix column': '0.38515 0.71687 0.09708',
       'blue matrix column': '0.14307 0.06061 0.7141',
       'device mfg desc': 'IEC http://www.iec.ch',
       'device model desc': 'IEC 61966-2.1 Default RGB colour space - sRGB',
       'viewing cond desc': 'Reference Viewing Condition in IEC61966-2.1',
       'viewing cond illuminant': '19.6445 20.3718 16.8089',
       'viewing cond surround': '3.92889 4.07439 3.36179',
       'viewing cond illuminant type': 'D50',
       luminance: '76.03647 80 87.12462',
       'measurement observer': 'CIE 1931',
       'measurement backing': '0 0 0',
       'measurement geometry': 'Unknown (0)',
       'measurement flare': '0.999%',
       'measurement illuminant': 'D65',
       technology: 'Cathode Ray Tube Display',
       'red tone reproduction curve': '(Binary data 2060 bytes, use -b option to extract)',
       'green tone reproduction curve': '(Binary data 2060 bytes, use -b option to extract)',
       'blue tone reproduction curve': '(Binary data 2060 bytes, use -b option to extract)',
       'dct encode version': '100',
       'app14 flags 0': '[14]',
       'app14 flags 1': '(none)',
       'color transform': 'YCbCr',
       'image width': '1920',
       'image height': '2560',
       'encoding process': 'Baseline DCT, Huffman coding',
       'bits per sample': '8',
       'color components': '3',
       'y cb cr sub sampling': 'YCbCr4:4:4 (1 1)',
       aperture: '3.5',
       'image size': '1920x2560',
       'scale factor to 35 mm equivalent': '4.0',
       'shutter speed': '1/60',
       'thumbnail image': '(Binary data 5613 bytes, use -b option to extract)',
       'circle of confusion': '0.007 mm',
       'field of view': '17.3 deg',
       'hyperfocal distance': '32.69 m',
       'light value': '9.5' } } ]
```

* Directory

```
$ ./exif.js -d ~/Pictures/Me

[results...]
```

* Recursive directories

```
$ ./exif.js -rd ~/Pictures/Me

[even more results...]
```

Dependencies (and credits)
----------------------
1. [ExifTool](http://owl.phy.queensu.ca/~phil/exiftool/) - by Phil Harvey
2. [commander.js](https://github.com/visionmedia/commander.js) - by TJ Holowaychuk
3. [node-exif](https://github.com/visionmedia/node-exif) - by TJ Holowaychuk
3. [wrench-js](https://github.com/ryanmcgrath/wrench-js) - by Ryan McGrath 
4. [async](https://github.com/caolan/async) - by Caolan McMahon

License
-------
The MIT License (MIT)

Copyright (c) 2013 Guy Vider <guy@guyvider.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.