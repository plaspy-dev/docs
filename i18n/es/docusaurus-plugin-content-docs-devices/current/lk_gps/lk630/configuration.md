---
slug: /lk_gps/lk630/configuration
id: lk630-configuration
sidebar_label: Configuration
title: LK-GPS - LK630 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el LK-GPS LK630 con Plaspy, con ajustes de servidor, lista de verificación y pasos de integración
keywords:
  - Configuración LK-GPS LK630
  - Configuración LK630
  - Configuración LK630 para Plaspy
  - Configuración de rastreador GPS Plaspy
  - Configuración de rastreador para mascotas
  - Configuración CatM
  - Integración de rastreador GPS
  - Configuración del servidor LK-GPS
  - Configuración de seguimiento LK630
  - Configuración de dispositivo Plaspy
---

# LK-GPS - Configuración del LK630

Esta página brinda el contexto público de configuración necesario para integrar el rastreador CatM LK-GPS LK630 con la plataforma Plaspy. Se enfoca en los ajustes prácticos a nivel de plataforma que permiten que el LK630 reporte ubicación y estado a Plaspy, y describe el flujo de trabajo típico para preparar el dispositivo y que sea visible en el entorno de Plaspy.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que use el instalador o revendedor. Use esta guía para aplicar los ajustes públicos de Plaspy y como lista de verificación antes de consultar la documentación de LK-GPS para procedimientos específicos del dispositivo.

## Resumen de configuración

El proceso de configuración alinea el rastreador LK630 para que reporte su ubicación y telemetría al punto de ingestión de Plaspy, de modo que los dispositivos sean visibles, reporten de forma confiable y activen alertas en la plataforma. La configuración se centra en definir el endpoint del servidor y el transporte, validar la conectividad celular y confirmar que el dispositivo aparezca en Plaspy.

- Configure el rastreador para que reporte al endpoint de servidor de Plaspy y así la ubicación y la telemetría lleguen a la plataforma.
- Seleccione el protocolo de transporte que soporte el dispositivo y que requieran las herramientas intermedias.
- Verifique la conectividad celular CatM y cualquier ajuste de APN o red que requiera la SIM.
- Guarde y aplique la configuración, luego valide que Plaspy reciba datos del dispositivo.
- Confirme el comportamiento de geocercas y alertas dentro de Plaspy una vez que el dispositivo sea visible.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el rastreador LK630. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se reciben datos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos

## Requisitos previos

- Un dispositivo LK630 cargado y listo para configuración y pruebas.
- Conectividad celular CatM o 4G activa para el dispositivo y una SIM con datos si el operador lo requiere.
- Acceso al método oficial de configuración de LK-GPS, como la app del fabricante, portal web, conjunto de comandos SMS o herramienta USB/serial provista por LK-GPS o su proveedor.
- El IMEI o identificador del dispositivo disponible para verificarlo en Plaspy después de la conexión.
- Conocimiento básico de la versión de firmware del dispositivo y de las herramientas del proveedor necesarias para guardar ajustes.
- Cobertura celular estable en el área de prueba para permitir que el dispositivo se registre y envíe sus primeros reportes.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el LK630 envía actualizaciones periódicas de ubicación y estado al endpoint de ingestión de Plaspy. Estos mensajes se reciben en el puerto compartido de Plaspy y se procesan según el protocolo detectado, de modo que el dispositivo aparece en el panel de Plaspy y genera eventos.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Los mensajes se envían al puerto 8888 usando UDP o TCP según lo soporte el dispositivo.
- Plaspy detecta automáticamente el protocolo y analiza los mensajes entrantes para extraer ubicación y telemetría.
- Las actualizaciones de ubicación, eventos de geocerca y alertas de estado se envían a Plaspy para visualización y reglas.
- La visibilidad del dispositivo en Plaspy confirma la comunicación exitosa y habilita el seguimiento histórico y las notificaciones.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de LK-GPS proporcionado por el fabricante o su proveedor.
2. En los ajustes de servidor o APN del dispositivo, introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto de reporte en 8888 tal como lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte y guarde esa opción.
5. Aplique o guarde la configuración en el rastreador con la herramienta o el conjunto de comandos del fabricante.
6. Reinicie el dispositivo si las instrucciones del fabricante indican un reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte en Plaspy verificando la visibilidad y las actualizaciones de ubicación recientes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

Los comandos exactos y el formato varían según el firmware de LK-GPS y la herramienta del proveedor usada para aprovisionar el LK630. Las apps del fabricante o los conjuntos de comandos SMS son métodos comunes para entregar la configuración. Debido a que la sintaxis específica depende del firmware y la distribución de LK-GPS, consulte la documentación oficial de LK-GPS o a su proveedor para los comandos precisos para establecer servidor, puerto y transporte.

Si dispone de comandos proporcionados por el fabricante, aplíquelos en el orden que recomiende LK-GPS. Los pasos típicos ajustarán la dirección del servidor, el puerto, el transporte y, opcionalmente, parámetros APN antes de guardar y reiniciar el dispositivo.

## Notas sobre la configuración

- Las diferencias de firmware entre las revisiones del LK630 pueden cambiar la sintaxis de comandos o la ubicación de menús en las herramientas del fabricante; verifique siempre la versión de firmware antes de aplicar comandos.
- Elija UDP o TCP según la capacidad del dispositivo y la preferencia del instalador. Plaspy soporta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme los ajustes de APN de la SIM si el dispositivo los requiere; algunas configuraciones no transmitirán datos hasta que el APN esté correctamente configurado para el operador móvil.
- Los identificadores del dispositivo, como el IMEI, son útiles durante la validación para emparejar el dispositivo físico con la entrada correspondiente en Plaspy.
- Las variantes específicas del mercado o las personalizaciones del proveedor pueden alterar la forma en que se aplican los ajustes; consulte los materiales de LK-GPS para cambios.

## Por qué usar Plaspy con esta configuración

Usar el LK630 con Plaspy centraliza los datos de rastreo de mascotas en una plataforma diseñada para visibilidad, notificaciones y análisis histórico. Plaspy captura la ubicación y la telemetría que transmite el LK630, habilitando seguimiento en vivo, alertas de geocerca y monitoreo consolidado de múltiples dispositivos.

Para más información sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del proveedor pueden cambiar con el tiempo, por lo que se recomienda verificar la referencia de configuración y comandos más reciente en el sitio del fabricante https://www.lk-gps.com.
