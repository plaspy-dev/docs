---
slug: /navigil/pt220/configuration
id: pt220-configuration
sidebar_label: Configuration
title: Navigil - PT220 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Navigil PT220 con Plaspy usando ajustes de servidor compartido
keywords:
  - configuración Navigil PT220
  - configuración PT220 para Plaspy
  - configuración servidor Navigil PT220
  - configuración rastreador GPS PT220
  - integración rastreador GPS Plaspy
  - configuración GPRS PT220
  - configuración rastreador personal
  - configuración software de rastreo PT220
  - configuración dispositivo Plaspy
  - guía despliegue PT220
---

# Navigil - PT220 Configuración

Esta página ofrece orientación pública para usar el Navigil PT220 con Plaspy. Se centra en los ajustes de servidor compartido y en los pasos prácticos que usted seguirá para apuntar el PT220 hacia Plaspy y habilitar el reporte en tiempo real. El contenido está pensado como referencia pública para técnicos e integradores que configuren el dispositivo para comunicarse con Plaspy.

Plaspy emplea los mismos ajustes de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que use esta página como punto de partida práctico y confirme los detalles con la documentación de Navigil cuando sea necesario.

## Resumen de la configuración

Configurar el PT220 para Plaspy prepara el equipo para enviar datos de ubicación y eventos a la plataforma, de modo que la unidad sea visible y administrable en Plaspy. El PT220 soporta reporte automático por GPRS y un modo de consulta por SMS; la configuración garantiza que el método de comunicación elegido esté activo y que el endpoint de reporte apunte a Plaspy.

- Apuntar el destino de reporte del PT220 al servidor de Plaspy para que los informes periódicos y por evento lleguen a la plataforma
- Seleccionar el modo de transporte que mejor se adapte a su despliegue y condiciones de red
- Validar conectividad y reportes después de aplicar los ajustes para que el dispositivo aparezca en Plaspy
- Mantener intervalos de reporte y consumo de energía adecuados para uso personal y objetivos de autonomía de la batería del PT220
- Confirmar detalles de firmware y herramientas del proveedor antes de aplicar cambios permanentes

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com para el reporte de rastreadores
- IP del servidor: 54.85.159.138 como endpoint alterno para configuración del dispositivo
- Puerto: 8888, usado por Plaspy para todos los dispositivos compatibles
- Soporte de transporte: configure el dispositivo para usar UDP o TCP en el puerto 8888 si requiere selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la configuración

- Un Navigil PT220 cargado y con una tarjeta SIM activa instalada si se usará el reporte por GPRS
- Acceso al método de configuración de Navigil o al software suministrado por el proveedor
- Cable USB o fuente de alimentación para mantener el dispositivo encendido durante la configuración y las pruebas
- Definir si utilizará modo GPRS automático o modo SMS manual para los reportes
- Cobertura de red y saldo de datos en la tarjeta SIM para el modo GPRS
- Una PC o dispositivo móvil para acceder a las herramientas del proveedor o para enviar comandos SMS de configuración si el dispositivo lo soporta

## Cómo se conecta este rastreador a Plaspy

El PT220 puede configurarse para enviar actualizaciones periódicas de ubicación y reportes de eventos al endpoint de Plaspy, de modo que el dispositivo sea visible en la plataforma. En modo GPRS enviará datos automáticamente al servidor y puerto de Plaspy. En modo SMS puede responder por SMS o llamada para devolver su posición, útil para consultas puntuales.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138
- Los reportes se envían al puerto 8888 que Plaspy utiliza para todos los dispositivos
- Puede elegir UDP o TCP como transporte al configurar el rastreador si el PT220 exige una selección
- Plaspy detectará el protocolo del rastreador automáticamente al conectarse y procesará los datos entrantes
- La validación consiste en confirmar que los reportes periódicos o por evento lleguen a Plaspy tras la configuración

## Flujo común de configuración

1. Acceda al método oficial de configuración de Navigil o al software del proveedor para el PT220
2. Inserte y active la tarjeta SIM y asegúrese de que el dispositivo tenga batería suficiente o esté alimentado por USB durante la configuración
3. Introduzca el dominio del servidor d.plaspy.com o, como alternativa, la IP del servidor 54.85.159.138 en los ajustes de destino del dispositivo
4. Establezca el puerto en 8888 que usa Plaspy para todos los dispositivos
5. Elija UDP o TCP si el dispositivo requiere selección de transporte
6. Aplique o guarde la configuración en los ajustes del dispositivo y, si se recomienda, reinicie el PT220
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de mensajes de ubicación en la plataforma

## Ejemplo de comandos de configuración

Los comandos y formatos exactos de configuración dependen del firmware del Navigil PT220 y de la herramienta de configuración del proveedor que utilice. Las herramientas del fabricante pueden presentar una interfaz donde introducir el dominio o IP y el puerto, o pueden aceptar comandos por SMS o por serie. Dado que el método puede variar, consulte la guía de configuración de Navigil o la interfaz del proveedor para la sintaxis precisa necesaria para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto 8888.

Si su herramienta del proveedor usa comandos de texto plano o SMS para establecer servidor y puerto, introduzca el destino y el transporte exactamente como se indica en la sección Ajustes del servidor de Plaspy. Conserve los marcadores de posición que la documentación del proveedor requiera al configurar valores de APN o credenciales.

## Notas sobre la configuración

- Las diferencias de firmware pueden modificar los nombres de menús y la sintaxis de comandos; consulte siempre la documentación de Navigil para su versión exacta de firmware
- Elija UDP o TCP según la fiabilidad de la red y la recomendación del proveedor para el PT220 en su entorno
- Para rastreadores personales alimentados por batería tenga cuidado con los intervalos de reporte para equilibrar visibilidad y duración de la batería
- El modo SMS es útil para consultas puntuales de ubicación pero no ofrece seguimiento continuo salvo que el dispositivo esté en modo GPRS
- Mantenga un registro del transporte y del endpoint configurados para facilitar futuras labores de resolución de problemas y auditorías

## Por qué usar Plaspy con esta configuración

Usar el Navigil PT220 con Plaspy ofrece a organizaciones y usuarios individuales una forma sencilla de centralizar reportes de posición y datos de eventos en una plataforma. Los ajustes de servidor compartido y la detección de protocolo de Plaspy reducen la complejidad de configuración al permitir apuntar el PT220 a un único destino y confiar en la plataforma para interpretar el protocolo del rastreador.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para detalles actuales específicos del dispositivo, notas de firmware y comandos de configuración verifique la información en el sitio del fabricante http://www.navigil.com/.
