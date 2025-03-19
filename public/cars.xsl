<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Lista samochodów</title>
            </head>
            <body>
                <h2>Lista samochodów</h2>
                <table border="1">
                    <tr>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Rok</th>
                    </tr>
                    <xsl:for-each select="cars/car">
                        <tr>
                            <td><xsl:value-of select="brand"/></td>
                            <td><xsl:value-of select="model"/></td>
                            <td><xsl:value-of select="year"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
