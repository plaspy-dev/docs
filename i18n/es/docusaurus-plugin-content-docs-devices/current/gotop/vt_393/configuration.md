---
slug: /gotop/vt_393/configuration
id: vt_393-configuration
sidebar_label: Configuration
title: GOTOP - VT-393 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP VT-393 con ajustes de servidor Plaspy y pasos prácticos de integración
keywords:
  - Configuración GOTOP VT-393
  - Instalación GOTOP VT-393
  - GOTOP VT-393 Plaspy
  - Configuración rastreador GPS GOTOP
  - Configuración servidor VT-393
  - Guía de instalación VT-393
  - Configuración rastreador vehicular GOTOP
  - Integración rastreador GPS Plaspy
  - Seguimiento de flotas VT-393
  - Guía de configuración VT-393
---

# GOTOP - VT-393 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP VT-393 con la plataforma Plaspy. Resume los ajustes de servidor prácticos y los pasos típicos necesarios para apuntar un dispositivo VT-393 a Plaspy, de modo que el equipo pueda enviar datos de ubicación y eventos a su cuenta Plaspy. El contenido está enfocado en detalles de configuración públicos y orientación general para instaladores, no en procedimientos internos o propietarios del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. El VT-393 soporta funciones como reporte por GPRS y SMS, actualizaciones OTA, integración de cámara, almacenamiento en tarjeta SD y múltiples opciones de E/S, por lo que debe seguir las indicaciones del fabricante al aplicar ajustes específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara una unidad VT-393 para comunicarse con Plaspy apuntando su endpoint de reporte al servidor de Plaspy y validando la conectividad. El objetivo es garantizar que el rastreador envíe posiciones, alertas y estados para que el dispositivo sea visible y gestionable desde la plataforma Plaspy.

- Configure el VT-393 para que reporte al endpoint y puerto del servidor Plaspy.
- Valide la conectividad de datos móviles o SMS para que el dispositivo pueda transmitir información.
- Confirme la selección del protocolo de transporte y guarde la configuración del equipo.
- Verifique que el dispositivo aparezca y reporte correctamente en Plaspy después del reinicio.
- Asegúrese de que funciones opcionales como registro de cámara y almacenamiento en SD operen según lo esperado en su instalación.

## Ajustes del servidor Plaspy

Al configurar el VT-393 para funcionar con Plaspy, utilice los siguientes ajustes públicos del servidor:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured using either transport on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Incluya estos valores exactos al ingresar el endpoint de reporte del dispositivo o al crear una entrada de servidor en su herramienta de fabricante.

## Requisitos típicos antes de la configuración

- Una unidad VT-393 alimentada y funcional con el firmware adecuado para su despliegue.
- Una tarjeta SIM válida y un plan de datos móviles si piensa usar reportes por GPRS, o capacidad SMS si configura reporte vía SMS.
- Acceso a la herramienta de configuración oficial de GOTOP o al método de configuración recomendado por el fabricante para el VT-393.
- Conocimiento del APN del dispositivo y de las credenciales del operador móvil necesarias para la conectividad GPRS.
- Opcional: tarjeta SD instalada y formateada si usará almacenamiento interno para fotos y registros.
- Acceso al vehículo y la posibilidad de reiniciar o cortar la alimentación del rastreador de forma segura durante la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT-393 puede enviar datos de ubicación, estado y eventos a Plaspy reportando al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos del rastreador, realiza la detección de protocolo y pone la información del dispositivo a disposición en la plataforma Plaspy para seguimiento, alertas e informes.

- El rastreador se configura para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Puede seleccionar UDP o TCP como transporte si el firmware del equipo exige una elección explícita.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al servidor y puerto correctos.
- Una vez activo el reporte, Plaspy mostrará actualizaciones de ubicación y notificaciones de eventos del VT-393.
- Use Plaspy para supervisar alertas como SOS, geocerca, exceso de velocidad y otros eventos que el equipo reporte.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración del GOTOP VT-393 provisto por el fabricante.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o IP del dispositivo.
3. Establezca el puerto de reporte del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los equipos.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Configure el APN y los ajustes de datos móviles para que la unidad se conecte por GPRS o asegure que los ajustes SMS estén disponibles si usa reporte por SMS.
6. Aplique o guarde la configuración en la herramienta del fabricante y, si es necesario, reinicie el VT-393.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma con posiciones y estados recientes.

## Comandos de configuración de ejemplo

El fabricante del VT-393 ofrece múltiples métodos de configuración y el conjunto de comandos exacto o las opciones de GUI pueden variar según el firmware y la herramienta del proveedor. Dado que los comandos y formatos específicos del modelo varían, utilice la documentación oficial de GOTOP o la herramienta del proveedor para enviar comandos de configuración. Las acciones típicas en la herramienta incluyen establecer el dominio del servidor o la IP y el puerto, seleccionar el transporte y guardar la configuración.

Si su guía de instalador o la documentación de firmware proporciona comandos SMS o seriales para la configuración del servidor, siga esos comandos al pie de la letra. Plaspy requiere el endpoint y puerto indicados en este documento: d.plaspy.com o 54.85.159.138 y puerto 8888. El texto exacto del comando depende del fabricante y debe consultarse en la documentación del GOTOP VT-393.

## Notas de configuración

- Las diferencias de firmware pueden modificar el flujo de configuración o los nombres de menú disponibles; confirme siempre la versión de firmware antes de aplicar los pasos.
- Elegir TCP frente a UDP puede afectar las características de entrega; seleccione el transporte que se ajuste a sus necesidades operativas y a las opciones que soporte el firmware del equipo.
- Si usa GPRS, verifique los ajustes de APN y las credenciales del operador para que el VT-393 pueda establecer una sesión de datos móviles.
- La capacidad de actualización OTA requiere conectividad GPRS y ajustes correctos de servidor/APN; use OTA solo cuando el fabricante lo recomiende.
- Para funciones como registro de cámara y almacenamiento en SD, confirme los tamaños de archivo y el comportamiento de almacenamiento para alinear con sus requisitos de retención y recuperación.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP VT-393 para que reporte a Plaspy brinda a las organizaciones visibilidad consolidada de la ubicación del vehículo, alertas y eventos operativos a través de una única plataforma. El soporte del VT-393 para registro de cámara, múltiples entradas y actualizaciones OTA lo convierte en un rastreador versátil para la supervisión de flotas, mientras que el enfoque de servidor compartido de Plaspy simplifica la incorporación de dispositivos usando ajustes de servidor consistentes.

Learn more about Plaspy and how it integrates with devices like the GOTOP VT-393 at https://www.plaspy.com. For the most current and device specific setup details, firmware notes, and configuration commands, verify information on the manufacturer website https://www.gotop.cc/ as vendor documentation and firmware behavior can change over time.
