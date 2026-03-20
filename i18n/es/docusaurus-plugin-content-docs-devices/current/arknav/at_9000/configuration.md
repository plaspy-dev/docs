---
slug: /arknav/at_9000/configuration
id: at_9000-configuration
sidebar_label: Configuration
title: ArkNav - AT-9000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ArkNav AT-9000 con Plaspy, incluye ajustes de servidor y flujo práctico de configuración
keywords:
  - Configuración ArkNav AT-9000
  - Configuración AT-9000
  - Configuración del rastreador ArkNav
  - Configuración AT-9000 para Plaspy
  - Guía de configuración de rastreadores GPS
  - Configuración rastreador de contenedores
  - Ajustes servidor Plaspy
  - Seguimiento de activos AT-9000
  - Guía de instalación AT-9000
  - Configuración para operación prolongada
---

# ArkNav - AT-9000 Configuración

Esta página documenta el contexto público de configuración para usar el ArkNav AT-9000 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, describe los prerrequisitos habituales y presenta un flujo de trabajo práctico para configurar el AT-9000 de modo que envíe posición y telemetría de eventos a la plataforma Plaspy. La orientación aquí está dirigida a usuarios técnicos que preparan el dispositivo para su integración con Plaspy y complementa la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT-9000 es un rastreador robusto para contenedores y operaciones de larga duración con AGPS y conmutación por celda, batería extraíble, opciones de recuperación por SMS y llamada, y una interfaz USB a serial que puede usarse durante la configuración en campo.

## Resumen de la configuración

Preparar un AT-9000 para la integración con Plaspy se centra en asegurar conectividad celular fiable, apuntar el dispositivo al endpoint de Plaspy y validar que la telemetría aparezca en la plataforma. Los puntos siguientes describen los objetivos prácticos del proceso de configuración.

- Configurar el dispositivo para enviar datos al endpoint del servidor Plaspy de modo que se entreguen los reportes de ubicación y eventos.
- Asegurar que el dispositivo tenga una SIM válida y ajustes APN correctos para que pueda establecer sesiones celulares para AGPS y subida de telemetría.
- Seleccionar el modo de transporte (UDP o TCP) y establecer el puerto 8888 que Plaspy usa para todos los dispositivos.
- Aplicar y guardar la configuración, reiniciar el rastreador si es necesario y confirmar que el dispositivo informa correctamente a Plaspy.
- Validar los perfiles de reporte por movimiento y por temporizador para equilibrar la vida de batería y la frecuencia de reporte en despliegues prolongados.

## Ajustes del servidor Plaspy

- Nombre de dominio del servidor d.plaspy.com
- Dirección IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Batería cargada o instalada y el dispositivo encendido para la configuración y pruebas.
- Tarjeta SIM activa con plan de datos y ajustes APN correctos para el operador celular que se utilizará en el despliegue.
- Acceso al método oficial de configuración ArkNav, como el cable USB a serial Prolific y el software de configuración del fabricante, o a los comandos SMS documentados.
- Documentación del fabricante o instrucciones proporcionadas por el proveedor para el firmware del AT-9000 y las herramientas del proveedor utilizadas para escribir los ajustes.
- Una cuenta de Plaspy o contacto de integración para verificar que el dispositivo aparece como conectado tras el aprovisionamiento.
- Herramientas básicas para verificación en campo, como una laptop con el cable de configuración y una comprobación temporal de cobertura celular.

## Cómo se conecta este rastreador a Plaspy

El AT-9000 envía posiciones AGPS y derivadas de celda al endpoint de Plaspy para que la ubicación y los eventos sean visibles en la plataforma. Configure el dispositivo para apuntar al endpoint y puerto compartidos de Plaspy, y la plataforma detectará y decodificará el protocolo del rastreador automáticamente.

- El dispositivo debe configurarse para reportar a d.plaspy.com o a 54.85.159.138 usando el puerto 8888.
- Elija UDP o TCP en el dispositivo si el firmware exige seleccionar el transporte; Plaspy acepta ambos.
- Las actualizaciones de ubicación y los eventos de movimiento se envían al servidor de Plaspy donde estarán disponibles para supervisión en tiempo real y reproducción histórica.
- Los datos almacenados localmente en el AT-9000 se subirán al endpoint de Plaspy cuando se restablezca la conectividad.
- Las funciones de recuperación por SMS y llamadas en el AT-9000 siguen siendo útiles para solicitudes puntuales de ubicación, pero no sustituyen el reporte estándar al servidor d.plaspy.com.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración ArkNav usando el cable USB a serial Prolific o las herramientas del proveedor recomendadas para el AT-9000.
2. Configure el APN celular y asegúrese de que la tarjeta SIM esté activa para que el dispositivo pueda abrir sesiones de datos.
3. Ingrese la dirección del servidor de Plaspy, ya sea como dominio d.plaspy.com o como IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
5. Seleccione UDP o TCP si el dispositivo requiere elección de transporte y guarde la configuración.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el firmware necesita un reinicio para aplicar los cambios.
7. Valide que el AT-9000 está reportando a Plaspy y confirme la visibilidad de datos de posición y eventos en la plataforma.

## Ejemplos de comandos de configuración

El AT-9000 admite configuración a través de la interfaz USB a serial del fabricante y mediante comandos SMS o llamadas dependiendo del firmware instalado. La sintaxis exacta de los comandos y los comandos SMS disponibles varían según el firmware y el conjunto de herramientas del proveedor, por lo que debe consultar la documentación de ArkNav o la guía de aprovisionamiento del proveedor para las cadenas y el orden exacto. Al usar las herramientas ArkNav, configure el servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888, luego seleccione UDP o TCP si es necesario y guarde el perfil.

Si necesita ejemplos de comandos para una revisión específica de firmware, consulte el manual de configuración de ArkNav o contacte a su proveedor para obtener la lista de comandos autorizada y secuencias de ejemplo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los pasos exactos, la ubicación de los menús o la sintaxis de los comandos SMS para configurar servidor y transporte.
- Los modos de transporte TCP y UDP se comportan de manera distinta en cuanto a manejo de sesiones y fiabilidad; elija el transporte que el firmware del dispositivo gestione mejor y verifique su operación.
- Confirme los ajustes APN de la SIM instalada antes de probar la conectividad para que el dispositivo pueda establecer una sesión de datos y enviar telemetría a d.plaspy.com.
- El almacenamiento flash local del AT-9000 mantendrá los datos durante las interrupciones de cobertura y los subirá al endpoint de Plaspy cuando la conectividad se restablezca.
- Mantenga una copia del perfil de configuración del dispositivo y de la versión de firmware usada durante la puesta en servicio para facilitar actualizaciones en campo o la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el ArkNav AT-9000 con Plaspy ofrece un enfoque práctico para el monitoreo a largo plazo de contenedores y activos donde la duración de batería y la robustez son prioritarias. Con ajustes de servidor compartidos y detección automática de protocolo, una vez que el AT-9000 esté configurado para reportar a d.plaspy.com en el puerto 8888, la integración de la telemetría de ubicación y eventos en la supervisión de flotas, alertas por geocerca y flujos de informes históricos se vuelve directa.

Para saber más sobre Plaspy y cómo puede apoyar sus despliegues con AT-9000 visite https://www.plaspy.com. Para las instrucciones de configuración específicas más recientes, notas de firmware y la sintaxis detallada de comandos, verifique la información con el fabricante en https://www.arknavgps.com.tw/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme los detalles actuales con ArkNav antes de un despliegue a gran escala.
