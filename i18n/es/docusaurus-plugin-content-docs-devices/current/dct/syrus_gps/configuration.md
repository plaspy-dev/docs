---
slug: /dct/syrus_gps/configuration
id: syrus_gps-configuration
sidebar_label: Configuration
title: DCT - Syrus GPS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador DCT Syrus GPS a Plaspy con comandos de ejemplo y ajustes de servidor
keywords:
  - configuración DCT Syrus GPS
  - configuración Syrus GPS para Plaspy
  - configuración servidor Syrus GPS
  - configuración software seguimiento Syrus GPS
  - configuración plataforma Syrus GPS
  - guía configuración rastreador GPS
  - seguimiento vehicular Syrus GPS
  - script configuración Syrus Desk
  - ajustes rastreador Plaspy
  - configuración APN Syrus GPS
---

# Configuración DCT - Syrus GPS

Esta página describe el contexto público de configuración para usar el rastreador DCT Syrus GPS con Plaspy. Se enfoca en los valores de servidor compartidos que Plaspy requiere y muestra cómo aplicar esos ajustes empleando contenido de configuración público de Syrus. Utilice esta guía para preparar el dispositivo y que Plaspy pueda recibir datos de ubicación y eventos desde el rastreador.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como Syrus Desk. El script de ejemplo que aparece a continuación es un script público SB de Syrus pensado como punto de partida y puede cargarse con Syrus Desk donde aplique.

## Resumen de la configuración

Este proceso prepara el Syrus GPS para comunicarse de forma fiable con Plaspy configurando los datos de APN del dispositivo, asignando el endpoint del servidor de Plaspy y habilitando los eventos de reporte que la plataforma puede mostrar y analizar.

- Proveer al rastreador la información de acceso a la red para que pueda alcanzar Plaspy
- Apuntar el rastreador a los ajustes del servidor de Plaspy para que los datos entrantes lleguen al endpoint correcto
- Habilitar el reporte de eventos comunes para que eventos de vehículo y movimiento aparezcan en Plaspy
- Validar la conectividad para que el dispositivo sea visible en la plataforma Plaspy

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Un dispositivo Syrus GPS con alimentación y accesible, instalado o en banco de pruebas para la configuración inicial  
- Acceso a Syrus Desk u otra herramienta oficial de configuración DCT para cargar scripts o enviar comandos SB  
- Una tarjeta SIM funcional y conectividad de datos móviles con credenciales APN si usa datos celulares (en el script de ejemplo se usan marcadores que deberá sustituir)  
- Conocimientos básicos para guardar y subir un script .tmf en Syrus Desk o para enviar comandos SB directamente  
- Acceso administrativo a Plaspy para que usted pueda verificar que el dispositivo aparece tras la configuración  
- Confirmación de la versión de firmware del dispositivo y cualquier nota del proveedor que pueda afectar la sintaxis de los comandos

## Cómo se conecta este rastreador a Plaspy

El Syrus GPS se configura para enviar datos AVL y eventos a Plaspy apuntando al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo tenga acceso a la red y se establezcan servidor/puerto, Plaspy detectará automáticamente el protocolo e incorporará los reportes del rastreador.

- El dispositivo usa el APN configurado y la red móvil para alcanzar Plaspy  
- El rastreador se apunta al endpoint del servidor Plaspy d.plaspy.com o a la dirección IP equivalente  
- Los datos se envían por el puerto 8888 usando UDP o TCP según la selección  
- Plaspy detecta el protocolo automáticamente y asocia los reportes entrantes con la cuenta del dispositivo  
- La configuración de reportes de eventos en el dispositivo activa la visibilidad y las alertas en Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración DCT Syrus, como Syrus Desk o la interfaz de comandos SB soportada.  
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor remoto.  
3. Establezca el puerto remoto en 8888. Plaspy utiliza el mismo puerto para todos los dispositivos.  
4. Elija transporte UDP o TCP si el dispositivo requiere selección de transporte.  
5. Configure los detalles del APN y las credenciales necesarias para la conectividad de datos móviles.  
6. Aplique o guarde la configuración y cargue el script en el dispositivo.  
7. Reinicie el dispositivo si la herramienta o el firmware lo requieren.  
8. Valide que el dispositivo esté reportando a Plaspy y sea visible en la plataforma.

## Ejemplo de comandos de configuración

Puede copiar y pegar este script en un archivo de texto nuevo, guardarlo con extensión .tmf y cargarlo con Syrus Desk. El script a continuación es un ejemplo público que muestra la configuración inicial, marcadores de APN y el destino del servidor Plaspy. Conserve los marcadores cuando los reemplace por los valores reales del APN.

Full example Syrus SB script (.tmf)
```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Notas clave sobre comandos y líneas individuales
- Paso inicial opcional para borrar configuración previa
```
>SRT;CONFIG<
```
- Desbloquear o preparar la configuración del adaptador (específico de la herramienta)
```
>SXADP**U<
```
- Parámetros del APN con marcadores
```
>SRFA[apn]<
>SRFL[apnu]<
>SRFP[apnp]<
```
  - [apn] es la cadena APN de la red de su proveedor  
  - [apnu] es el usuario del APN si el operador lo requiere  
  - [apnp] es la contraseña del APN si el operador lo requiere
- Apuntar el dispositivo al servidor Plaspy y al puerto
```
>SXADP0000d.plaspy.com;8888<
```
- Definir la dirección de destino y las definiciones básicas de eventos/reportes
```
>SDA4;P00<
>STD80300<
>SED37NV4;TD8+<
>SED05NV4;IP3+<
```

Nota: El conjunto exacto de comandos y la secuencia pueden variar ligeramente según el firmware de Syrus o la versión de Syrus Desk. Use estas líneas como referencia y consulte las herramientas del fabricante al guardar y subir el script .tmf.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la disponibilidad y la sintaxis de los comandos. Verifique el conjunto de comandos correcto para la versión de firmware de su dispositivo antes de guardar los scripts.  
- Elija UDP o TCP en función de las condiciones de la red y las políticas de su organización; ambos transportes son compatibles con Plaspy en el puerto 8888.  
- El script de ejemplo usa marcadores de APN; reemplace [apn], [apnu] y [apnp] por los valores de su operador antes de subirlo.  
- Syrus Desk se usa comúnmente para cargar scripts .tmf, pero siga las instrucciones de DCT para su cadena de herramientas exacta.  
- La comunicación satelital de respaldo y la configuración OTA del PEGASUS Gateway forman parte del ecosistema de productos Syrus y pueden requerir accesorios o herramientas adicionales del proveedor.

## Por qué usar Plaspy con esta configuración

Configurar el DCT Syrus GPS para reportar a Plaspy ofrece a las organizaciones una vía sencilla para capturar ubicación, eventos de movimiento y señales telemáticas básicas en una única plataforma. Usar los ajustes de servidor compartidos de Plaspy facilita el despliegue en flotas mixtas porque todos los dispositivos compatibles reportan al mismo puerto de Plaspy y la plataforma gestiona la detección automática del protocolo.

Para detalles paso a paso y configuración de cuenta, conozca más sobre Plaspy en https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y requisitos de accesorios del dispositivo, consulte el sitio del fabricante en https://www.digitalcomtech.com/ para obtener precisión y actualizaciones.
