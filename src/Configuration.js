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

import Transloc3Parser from './Transloc3Parser';

class Configuration {
    constructor() {
        this.center = [33.205381, -87.557197];

        this.agencies = [
            {
                name: 'Routes',
                parser: new Transloc3Parser(873, 'https://tuscaloosa.gotransitapp.com/api/no.php/3/')
            }
        ];
    }
}

export default Configuration;
