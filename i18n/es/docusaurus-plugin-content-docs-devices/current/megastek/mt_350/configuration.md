---
slug: /megastek/mt_350/configuration
id: mt_350-configuration
sidebar_label: Configuration
title: Megastek - MT-350 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek MT-350 con Plaspy; incluye ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración Megastek MT-350
  - Configuración MT-350
  - Configuración Plaspy MT-350
  - Configuración servidor MT-350
  - Configuración rastreador Plaspy
  - Configuración UWB MT-350
  - Configuración rastreador interior
  - Integración RTLS Plaspy
  - Configuración brazalete Megastek
  - Ajustes servidor Plaspy
---

# Megastek - Configuración del MT-350

Esta página describe el contexto público de configuración para usar el Megastek MT-350 con Plaspy. Explica los parámetros compartidos del servidor Plaspy a los que debe apuntar el rastreador o la infraestructura de soporte, y presenta comandos de ejemplo que están disponibles públicamente para configurar dispositivos compatibles. Utilice esta guía para entender los pasos prácticos necesarios para que la telemetría y las alertas del MT-350 sean visibles en Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que aparecen a continuación son una referencia pública y deben usarse junto con la documentación del fabricante para el MT-350 y cualquier estación base UWB que gestione los enlaces de subida.

## Resumen de configuración

El objetivo de la configuración es preparar el MT-350 y su infraestructura UWB de soporte para enviar datos de ubicación, estado y alertas a la plataforma Plaspy usando el endpoint compartido. Normalmente la configuración implica definir la identidad del dispositivo, asegurar el acceso de red para los enlaces de subida y apuntar la ruta de envío hacia Plaspy para que los mensajes lleguen de forma fiable.

- Configure la identidad del dispositivo para que Plaspy pueda mapear los mensajes al registro correcto.
- Proporcione acceso de red o parámetros de backhaul para que las estaciones base o gateways puedan enviar datos a Plaspy.
- Asegúrese de que el rastreador o el gateway apunten al endpoint del servidor Plaspy y al puerto compartido usado por todos los dispositivos.
- Verifique los intervalos de reporte y la telemetría de salud para que el brazalete cumpla los requisitos operativos en Plaspy.
- Valide el reenvío de alarmas y eventos SOS para que las alertas aparezcan en los paneles y registros de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo apropiado automáticamente, por lo que su configuración solo necesita apuntar al host Plaspy correcto y elegir un transporte que el dispositivo o gateway soporte.

## Requisitos previos

- Un dispositivo MT-350 cargado y las estaciones base UWB o gateways instalados y alimentados según corresponda.
- Acceso al IMEI del dispositivo o al ID único usado para registrar el dispositivo en Plaspy o en la herramienta del instalador.
- Si el dispositivo o el gateway de enlace soporta configuración por celular o SMS, una SIM activa con datos o capacidad de SMS y un teléfono con capacidad SMS para enviar comandos.
- Acceso al método de configuración oficial de Megastek o al software del proveedor y a las notas de firmware para su revisión de hardware.
- Conectividad de red desde sus estaciones base UWB o gateway hacia Internet para que puedan alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Acceso administrativo en Plaspy para registrar o verificar el dispositivo cuando empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

El MT-350 forma parte de un RTLS de interior que usa estaciones base UWB para determinar la posición. Esas estaciones base o un gateway asociado reenvían la ubicación y la telemetría del brazalete a Plaspy en el endpoint y puerto compartidos. La configuración puede realizarse mediante el software del proveedor, la interfaz del gateway o mediante comandos SMS cuando esté disponible.

- La ubicación y la telemetría del MT-350 se reenvían a través de las estaciones base UWB o de un gateway hacia Plaspy.
- Las pulsaciones del botón SOS, alertas por manipulación, batería baja y eventos de movimiento se envían y quedan visibles en Plaspy.
- El dispositivo o gateway se configura para reportar al endpoint y puerto del servidor Plaspy para que los datos lleguen a la plataforma centralizada.
- Los intervalos de reporte y los mensajes de salud determinan la frescura de los datos mostrados en Plaspy.
- Plaspy presenta la posición, las alarmas y la telemetría unificadas para monitoreo operativo y respuesta.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Megastek o a la interfaz de gestión del gateway/estación base indicada por el proveedor.
2. Ingrese el host del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto de destino en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija el modo de transporte UDP o TCP si el dispositivo o gateway requiere una selección explícita.
5. Configure la identidad del dispositivo y el intervalo de reporte según sea necesario, por ejemplo usando SMS o la herramienta del proveedor para establecer el IMEI y el intervalo.
6. Aplique o guarde la configuración y reinicie el dispositivo o gateway si la herramienta requiere un reinicio para aplicar los ajustes.
7. Verifique que el dispositivo o gateway reporte a Plaspy y que los mensajes de ubicación y alarma aparezcan en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS se extraen del contenido público de configuración para modelos que usan setup vía SMS. Los comandos de muestra asumen que la contraseña del dispositivo es 000000, que es el valor de fábrica en el ejemplo publicado. Reemplace 000000 por la contraseña de su dispositivo si la ha cambiado.

Notas:
- Reemplace \<15-digit-IMEI> por el IMEI del dispositivo (últimos 15 dígitos).
- [apn] es un marcador para el APN de su operador celular. [apnu] y [apnp] son el usuario y la contraseña opcionales del APN si su operador los requiere.
- El comando de servidor GPRS mostrado usa la IP de Plaspy. Si el firmware de su dispositivo acepta nombres de host, podría sustituir por d.plaspy.com.

1. Establecer el ID del dispositivo (use el IMEI de 15 dígitos)
```text
M000000,22,<15-digit-IMEI>
```

2. Establecer el APN del operador (APN con usuario y contraseña opcionales)
```text
M000000,23,[apn]
```
O con usuario y contraseña del APN
```text
M000000,23,[apn],[apnu],[apnp]
```

3. Establecer el intervalo de actualización a 60 segundos
```text
M000000,25,60
```

4. Establecer el servidor GPRS para apuntar a Plaspy (ejemplo usa IP y puerto de los ajustes públicos de Plaspy)
```text
M000000,24,56 54.85.159.138,8888
```

5. Habilitar modo GPRS
```text
M000000,21,2
```

Siga las indicaciones del fabricante sobre el formato de los SMS y asegúrese de enviar los comandos desde un número autorizado si el dispositivo está configurado para aceptar SMS solo desde una lista de números.

## Notas de configuración

- Diferencias de firmware y herramientas: la sintaxis de los comandos SMS y los parámetros soportados pueden variar entre versiones de firmware y variantes del producto. Confirme la sintaxis exacta con la documentación de Megastek para su número de serie y firmware.
- SMS frente a software de gestión: algunas instalaciones prefieren usar el software del proveedor o la interfaz web del gateway UWB en lugar de SMS. Utilice el método apropiado para su despliegue.
- TCP vs UDP: elija UDP o TCP según las capacidades del gateway o dispositivo y la fiabilidad de la red. Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- Uso consistente del puerto: Plaspy usa el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor entre diferentes tipos de rastreadores.
- Precisión del IMEI: al enviar comandos de identificación del dispositivo, verifique que el IMEI sea correcto y esté formateado según lo requiera Megastek. Los comandos de ejemplo esperan un identificador de 15 dígitos.

## Por qué usar Plaspy con esta configuración

Usar el MT-350 con Plaspy incorpora datos de ubicación indoor de alta precisión y el estado del dispositivo en una vista operativa única. Las organizaciones que necesitan seguimiento preciso de personal, notificaciones de alarmas oportunas y monitoreo centralizado de la salud de los dispositivos pueden combinar la ubicación UWB del MT-350 con los paneles y alertas de Plaspy para mejorar la conciencia situacional y la respuesta operativa.

Para más información sobre Plaspy y patrones de configuración soportados visite https://www.plaspy.com y consulte con Megastek para detalles específicos de instalación y firmware en https://www.megastek.com/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar las instrucciones más recientes en el sitio oficial de Megastek.
