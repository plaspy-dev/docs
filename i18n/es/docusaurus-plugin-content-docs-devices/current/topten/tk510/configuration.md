---
slug: /topten/tk510/configuration
id: tk510-configuration
sidebar_label: Configuration
title: TopTen - TK510 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el TopTen TK510 con Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración TopTen TK510
  - Instalación TopTen TK510
  - Configuración de servidor TK510
  - Configuración TK510 Plaspy
  - Configuración rastreador GPS TopTen
  - Instalación rastreador vehicular TK510
  - Ajustes APN TopTen TK510
  - Configuración SMS TK510
  - Configuración plataforma de rastreo vehicular
  - Configuración rastreador Plaspy
---

# TopTen - Configuración del TK510

Esta página documenta la configuración pública necesaria para usar el TopTen TK510 con Plaspy. Se centra en los ajustes compartidos de servidor que requiere Plaspy, los comandos SMS públicos habituales para este modelo y los pasos prácticos para dejar un TK510 visible en la plataforma Plaspy. Cuando los comandos del fabricante son públicos, esta guía los preserva y explica los marcadores de posición que debe reemplazar.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del vendedor. El TK510 puede configurarse por SMS conforme a la documentación pública del dispositivo; esta página explica cómo aplicar esos valores públicos para que el rastreador informe correctamente a Plaspy.

## Resumen de la configuración

Este proceso prepara un TK510 para comunicarse con Plaspy configurando el endpoint del servidor, el transporte y el APN para que pueda enviar reportes periódicos de posición y eventos. El objetivo es que el dispositivo sea accesible por el backend de Plaspy y visible en la interfaz de Plaspy una vez que comience a reportar.

- Configure el servidor del dispositivo para que los datos de ubicación y eventos lleguen a Plaspy.
- Ajuste el APN y los parámetros GPRS para que el dispositivo tenga conectividad de datos por la red móvil.
- Seleccione UDP o TCP si el equipo requiere una selección explícita de transporte.
- Valide conectividad e identificador del dispositivo para que Plaspy pueda asociar los reportes entrantes al activo correcto.
- Opcionalmente, restaure la configuración de fábrica o verifique los ajustes mediante los comandos de verificación proporcionados.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos antes de la configuración

- Un TK510 alimentado y accesible para configuración con batería cargada o alimentación externa conectada.
- Una SIM móvil instalada y activa con datos y SMS si va a configurar el equipo por SMS y usar reporte por GPRS.
- Tener a mano el IMEI del dispositivo para determinar el identificador del rastreador usado por Plaspy.
- Datos del APN del operador móvil, incluyendo nombre de APN y, si aplica, usuario y contraseña.
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta del proveedor que habitualmente usa el instalador.
- Una cuenta en Plaspy y permiso para agregar o validar dispositivos en su organización Plaspy.

## Cómo se conecta este rastreador a Plaspy

El TK510 se configura para reportar a Plaspy enviando paquetes de datos GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta automáticamente el protocolo del rastreador y asocia los reportes entrantes con el identificador del dispositivo derivado del IMEI del rastreador.

- Los reportes del dispositivo se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El identificador del rastreador usado por Plaspy corresponde a los últimos 14 dígitos del IMEI tal como los entrega el equipo con el comando PAR.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Después de configurar APN y servidor, el TK510 enviará reportes periódicos para que Plaspy muestre datos de ubicación y eventos.
- Use el comando de verificación publicado para confirmar que el rastreador ha almacenado los ajustes del servidor antes de validarlo en Plaspy.

## Procedimiento común de configuración

1. Acceda al método oficial de configuración del fabricante para el TK510, como la interfaz de comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes del dispositivo.
3. Configure el puerto del dispositivo en 8888, tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP si el equipo requiere una elección explícita de transporte.
5. Configure el APN y las credenciales del APN usando los marcadores de posición proporcionados por su operador móvil.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que Plaspy asocie el reporte al ID correcto del rastreador, que corresponde a los últimos 14 dígitos del IMEI.

## Ejemplos de comandos de configuración

La guía pública del TK510 muestra comandos basados en SMS. Los siguientes comandos son ejemplos publicados por el fabricante y se conservan en su orden. Mantenga los marcadores de posición tal como aparecen y reemplace [apn], [apnu] y [apnp] con el nombre del APN, el usuario y la contraseña de su operador móvil si son requeridos.

- Reinicio inicial opcional a configuración de fábrica
```text
111111CLR
```
Etiqueta: Restauración opcional a ajustes de fábrica cuando necesite una configuración limpia.

- Configurar APN y servidor GPRS para reportar a Plaspy
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:[apn],[apnu],[apnp];RPT:60;SLP:60;RUN:2;
```
Notas:
- Este comando establece la IP del servidor en 54.85.159.138 y el puerto en 8888 para el reporte a Plaspy.
- Reemplace [apn] por el nombre del APN de su operador. Si el operador proporciona usuario y contraseña del APN, reemplace [apnu] y [apnp] respectivamente. Si no son requeridos, déjelos vacíos u omítalos si el firmware del dispositivo lo permite.
- Los parámetros RPT, SLP y RUN están incluidos en el ejemplo publicado; preserve el orden al enviar este comando público.

- Comando de verificación para comprobar los ajustes almacenados
```text
111111WWW:
```
Etiqueta: Use este comando para solicitar al dispositivo que devuelva la configuración WWW actual y así confirmar que se almacenaron el servidor, puerto y valores de APN.

## Notas de configuración

- Variantes de firmware y regiones pueden cambiar el formato exacto de los comandos SMS o los prefijos requeridos. Verifique siempre la sintaxis de los comandos para la versión de firmware de su dispositivo.
- El TK510 soporta configuración por SMS como se muestra en la documentación pública; algunos instaladores prefieren herramientas del proveedor o interfaces USB cuando están disponibles.
- Al elegir el transporte, TCP puede usarse para entrega garantizada, mientras que UDP suele utilizarse por menor sobrecarga; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Preservar el orden de los parámetros en los comandos cuando siga ejemplos publicados; algunos firmwares esperan una secuencia específica.
- Mantenga un registro del IMEI del dispositivo y confirme el identificador del rastreador porque Plaspy usa los últimos 14 dígitos del IMEI para asociar los reportes entrantes.

## Por qué usar Plaspy con esta configuración

Configurar un TK510 para reportar a Plaspy ofrece a su organización una vía sencilla para recibir datos en tiempo real de posición y eventos desde el dispositivo usando ajustes de servidor compartidos y documentados. Al dirigir el equipo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y asegurar la conectividad APN, usted permite que Plaspy detecte automáticamente el protocolo del rastreador y muestre la ubicación del dispositivo y las alarmas en la plataforma para supervisión operativa.

Para saber más sobre Plaspy y cómo soporta la conectividad de dispositivos y la visibilidad de la flota visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles de configuración más recientes en el sitio del fabricante http://www.t10.cn.
