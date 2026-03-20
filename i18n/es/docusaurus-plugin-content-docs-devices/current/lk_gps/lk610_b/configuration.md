---
slug: /lk_gps/lk610_b/configuration
id: lk610_b-configuration
sidebar_label: Configuration
title: LK-GPS - LK610-B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK610-B y conectarlo a Plaspy para seguimiento en tiempo real
keywords:
  - configuración LK GPS LK610 B
  - configuración LK610 B Plaspy
  - configuración rastreador LK GPS
  - configuración servidor LK610 B
  - configuración rastreador GPS wearable
  - configuración rastreador Plaspy
  - configuración rastreador personal GPS
  - plataforma seguimiento LK GPS
  - configuración SMS LK610 B
  - integración plataforma rastreador
---

# LK-GPS - Configuración del LK610-B

Esta página presenta el contexto público de configuración para utilizar el rastreador LK-GPS LK610-B con Plaspy. Resume los valores de servidor y el flujo de trabajo práctico necesarios para habilitar el seguimiento en tiempo real, alertas SOS y la carga de ubicaciones desde este dispositivo portátil con SIM hacia Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador reporta a la plataforma. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los parámetros aquí son los valores públicos de Plaspy que debe aplicar mediante el método de configuración que provea el fabricante del dispositivo.

## Resumen de configuración

Estos valores aseguran que el LK610-B envíe datos de ubicación y alertas a la plataforma Plaspy de forma fiable. Los ajustes públicos a continuación son los que debe ingresar en la herramienta de configuración del rastreador o enviar por SMS, según la variante del equipo y el método del fabricante.

- Configure el dispositivo para reportar a Plaspy usando el endpoint de servidor compartido o su IP para que los datos lleguen a la plataforma.
- Ajuste el puerto y el tipo de transporte para que coincidan con los requisitos de Plaspy y se acepten las cargas.
- Verifique el APN y la conectividad celular para que el dispositivo tenga una ruta de datos operativa para subir ubicaciones y alertas.
- Aplique y guarde los ajustes en el rastreador, y confirme que el dispositivo aparece y reporta en Plaspy.
- Pruebe las alertas SOS y de movimiento para asegurarse de que los eventos y las actualizaciones de ubicación lleguen a la cuenta de Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con un plan de datos apropiado instalada en la variante LK610-B que está configurando.
- Batería cargada o alimentación conectada y acceso físico al rastreador para su puesta en marcha.
- Acceso al método de configuración oficial de LK-GPS, como la herramienta web del proveedor, el software de escritorio o los comandos SMS.
- APN y ajustes de red celular correctamente configurados en el dispositivo para que pueda establecer una conexión GPRS o NB según la variante del modelo.
- Una cuenta de Plaspy con permisos para agregar y ver dispositivos para validar reportes y alertas.
- Conocimiento de la variante del modelo (2G o NB) para confirmar la compatibilidad con la red.

## Cómo se conecta este rastreador a Plaspy

El LK610-B envía sus datos de ubicación y eventos desde el wearable a Plaspy a través de la red celular utilizando el endpoint de servidor y el transporte configurados. Plaspy recibe esas cargas en el puerto compartido y las enruta dentro de la plataforma, donde la detección de protocolo normaliza la información entrante.

- Las localizaciones y los datos asistidos por LBS se suben al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Las pulsaciones del botón SOS y los eventos de alarma se transmiten a Plaspy y se convierten en alertas accionables en la plataforma.
- Las subidas regulares de posición o los modos de reporte por tiempo permiten visibilidad continua y reproducción histórica dentro de Plaspy.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que el mismo puerto y endpoint funcionan en los dispositivos compatibles.
- Eventos de llamadas bidireccionales y el estado del dispositivo pueden correlacionarse en Plaspy para monitoreo operativo y auditoría.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de LK-GPS proporcionado por el fabricante, o prepárese para usar el método documentado por SMS.
2. En la pantalla de configuración del dispositivo o en la sintaxis SMS, indique el servidor de Plaspy como d.plaspy.com o la IP alternativa 54.85.159.138.
3. Establezca el puerto de reporte a 8888 como puerto de subida del dispositivo.
4. Seleccione el protocolo de transporte UDP o TCP si el equipo requiere una selección de transporte; elija el protocolo compatible con su operador y firmware del dispositivo.
5. Configure el APN y cualquier ajuste GPRS necesario para que el rastreador pueda conectarse a la red celular.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado del equipo y las actualizaciones de ubicación recientes en su cuenta Plaspy.

## Ejemplo de comandos de configuración

La descripción pública de este modelo en este documento no incluye un conjunto estandarizado de comandos del fabricante. Los comandos exactos de configuración y la sintaxis SMS varían según el firmware de LK-GPS y las herramientas del proveedor. En la práctica, configurará el servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888 usando la utilidad de configuración de LK-GPS o los comandos SMS del dispositivo documentados por LK-GPS.

Para el formato preciso de SMS o comandos de software, consulte la guía de configuración oficial de LK-GPS suministrada con el equipo o la documentación del fabricante en su sitio web. Utilice el dominio o la IP del servidor y el puerto 8888 en esos comandos o en los campos de la herramienta y seleccione UDP o TCP según sea necesario.

## Notas de configuración

- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y realiza detección de protocolo automática, por lo que el dispositivo sólo necesita el servidor y el puerto correctos para comenzar a reportar.
- Las revisiones de firmware pueden cambiar el menú de configuración, la sintaxis SMS o las opciones de transporte disponibles; siempre verifique la documentación de LK-GPS para la versión de firmware de su equipo.
- Si el dispositivo soporta tanto configuración por SMS como por software, el SMS puede ser útil para la puesta en marcha en campo, mientras que las herramientas de software suelen ofrecer más opciones.
- Elija UDP o TCP según la capacidad del dispositivo y el entorno de red; algunos instaladores prefieren UDP por su menor overhead mientras que otros usan TCP para entrega más fiable dependiendo del firmware del rastreador.
- Verifique el APN y la compatibilidad del operador para la variante específica del LK610-B que tenga, especialmente entre variantes 2G y NB.

## Por qué usar Plaspy con esta configuración

Usar el LK610-B con Plaspy ofrece una forma sencilla de integrar el rastreo personal wearable en una plataforma de monitoreo centralizada. Las organizaciones obtienen visibilidad continua, alertas SOS y geocercas, y reproducción de rutas históricas, manteniendo la puesta en marcha en campo simple mediante SMS o herramientas del proveedor.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and command syntax refer to the manufacturer documentation at https://www.lk-gps.com.
