/* -*- Mode: rjsx -*- */

/*******************************************
 * Copyright (2018)
 *  Marcus Dillavou <line72@line72.net>
 *  http://line72.net
 *
 * Montclair:
 *  https://github.com/line72/montclair
 *  https://montclair.line72.net
 *
 * Licensed Under the GPLv3
 *******************************************/

import GTFSRTParser from './GTFSRTParser';

class Configuration {
    constructor() {
        this.center = [33.205381, -87.557197];
        this.tileserver = {
            url: 'https://tuscaloosa.gotransitapp.com/tiles/{z}/{x}/{y}.png',
            subdomains: ''
        };

        this.agencies = [
            {
                name: 'Routes',
                parser: new GTFSRTParser('montclair',
                                         '/tuscaloosa_transit.zip',
                                         'https://tuscaloosa.gotransitapp.com/api/no.php/passioTransit/gtfs/realtime/vehiclePositions',
                                         'https://tuscaloosa.gotransitapp.com/api/no.php/passioTransit/gtfs/realtime/tripUpdates')
            }
        ];
    }
}

export default Configuration;
