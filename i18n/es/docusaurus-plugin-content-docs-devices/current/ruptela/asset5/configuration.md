---
slug: /ruptela/asset5/configuration
id: asset5-configuration
sidebar_label: Configuration
title: Ruptela - Asset5 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ruptela Asset5 con los ajustes de servidor de Plaspy y pasos de instalación
keywords:
  - configuración Ruptela Asset5
  - instalación Asset5 Ruptela
  - integración Plaspy Asset5
  - configuración servidor Asset5
  - configuración rastreador GPS Asset5
  - rastreador Ruptela Plaspy
  - configuración software seguimiento Asset5
  - configuración plataforma GPS Asset5
  - configuración BLE Asset5
  - monitoreo vida batería Asset5
---

# Ruptela - Configuración de Asset5

Esta página describe el contexto público de configuración para usar el rastreador Ruptela Asset5 con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos, la preparación necesaria y los pasos prácticos que normalmente deberá seguir para enviar telemetría y datos de ubicación del Asset5 a Plaspy, con el fin de obtener seguimiento en tiempo real y reportes históricos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice. Use esta guía para preparar el Asset5 para Plaspy y luego verifique el comportamiento final del dispositivo contra la documentación oficial de Ruptela y el firmware de su equipo.

## Resumen de la configuración

Preparar el Asset5 para Plaspy significa garantizar que el dispositivo pueda alcanzar el endpoint del servidor de Plaspy y reporte arreglos GNSS, eventos de movimiento y telemetría de salud para que el activo sea visible en la plataforma. El proceso de configuración alinea los ajustes de red del dispositivo con el endpoint compartido de Plaspy y verifica que los reportes lleguen correctamente a la plataforma.

- Configure el servidor o destino APN del dispositivo hacia el servidor de Plaspy para que la telemetría se enrute correctamente.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Confirme que el dispositivo pueda registrarse en la red celular y que cuente con la alimentación o baterías necesarias.
- Valide que los eventos de movimiento y la telemetría (GNSS, acelerómetro, batería) se reporten y sean visibles en Plaspy.
- Utilice la configuración local por BLE mediante la app mDMP si está disponible para facilitar la instalación y las pruebas in situ.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la instalación

- Asset5 con baterías nuevas o cargadas y el montaje necesario completado.
- Una SIM o provisión celular adecuada para su variante de Asset5 y cobertura regional si el dispositivo usa conectividad celular.
- Acceso al método o software oficial de configuración de Ruptela, como la app móvil mDMP o las herramientas del proveedor.
- Una cuenta en Plaspy y el procedimiento de registro de dispositivos para validar los reportes entrantes.
- Herramientas básicas para verificar el registro celular y las fijaciones GNSS durante la configuración inicial.
- Acceso a la documentación de producto de Ruptela para instrucciones específicas por firmware y notas de variantes.

## Cómo se conecta este rastreador a Plaspy

Asset5 transmite ubicación y telemetría a través de redes celulares al endpoint del servidor Plaspy para que la plataforma muestre la ubicación en tiempo real, eventos y el estado del dispositivo. El equipo se configura para reportar al endpoint y puerto compartidos de Plaspy, donde la plataforma identifica el protocolo del dispositivo y parsea los mensajes entrantes.

- Fijaciones GNSS y datos de respaldo por Cell‑ID se envían a Plaspy para actualizaciones de posición.
- Eventos de movimiento detectados por el acelerómetro aumentan la frecuencia de reporte para facilitar la recuperación.
- Telemetría de batería y salud del dispositivo se reporta para que Plaspy muestre alertas de mantenimiento.
- Bluetooth LE permite configuración local y verificación en sitio antes de activar el reporte por red.
- Toda la comunicación hacia Plaspy apunta al endpoint compartido y al mismo puerto de Plaspy para agrupar los reportes de forma consistente.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración de Ruptela (por ejemplo la app mDMP o la herramienta del proveedor) para la variante de firmware y hardware de su Asset5.
2. En los ajustes de servidor o de red del dispositivo, ingrese d.plaspy.com o, según se requiera, la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 como el puerto de destino usado por Plaspy para todos los dispositivos.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su preferencia de instalación.
5. Aplique o guarde la configuración dentro de la herramienta o app de Ruptela y asegúrese de que los cambios se hayan comprometido al dispositivo.
6. Reinicie el dispositivo si la herramienta de configuración o el firmware requiere un reinicio para activar los nuevos ajustes de red.
7. Valide que Asset5 reporte a Plaspy observando los datos entrantes en su cuenta de Plaspy o verificando los registros del servidor para los mensajes del dispositivo.

## Ejemplos de comandos de configuración

El Asset5 suele configurarse mediante las herramientas de Ruptela y la app mDMP en lugar de comandos de texto genéricos en muchas implementaciones. Los comandos exactos y la sintaxis varían según el firmware y el canal de configuración; consulte la documentación oficial de Ruptela para los conjuntos de comandos por línea de comandos o SMS específicos de su firmware.

A continuación, se listan los campos clave que normalmente configurará en la herramienta del fabricante en lugar de comandos literales:

- Host del servidor: d.plaspy.com (o 54.85.159.138)
- Puerto del servidor: 8888
- Transporte: UDP o TCP

Si su despliegue utiliza configuración por SMS o comandos de texto de Ruptela, consulte la documentación oficial de Ruptela para el formato exacto de los comandos y mantenga los marcadores de posición como {{apn}}, {{apnu}} o {{apnp}} al configurar credenciales APN mediante comandos. Siga siempre el orden de comandos de Ruptela al realizar una configuración inicial o un reinicio opcional.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la ubicación exacta de menús o el formato de comandos; verifique siempre las notas de la versión de Ruptela para su firmware.
- La elección entre UDP o TCP puede afectar el comportamiento de entrega; UDP es común para telemetría ligera, mientras que TCP puede emplearse donde se prefiera una entrega más confiable por sesión.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente, concéntrese primero en ingresar el host/IP y el puerto correctos, y luego verifique el transporte si el rastreador lo requiere.
- Use la configuración por BLE (app mDMP) para la puesta a punto local y la verificación rápida antes de enviar los dispositivos al campo.
- Los intervalos de reporte y la sensibilidad al movimiento afectan la vida útil de la batería; ajuste los parámetros según los requisitos operativos y verifique los impactos en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Asset5 con Plaspy ofrece una solución práctica para organizaciones que necesitan rastrear activos no alimentados o de alto valor con baja necesidad de mantenimiento. La larga autonomía del Asset5, su GNSS multiconstelación y el reporte basado en movimiento se complementan con los tableros centralizados y el sistema de alertas de Plaspy para ofrecer conciencia situacional continua y supervisión operativa.

Para saber más sobre Plaspy y cómo puede gestionar dispositivos Asset5 a escala visite https://www.plaspy.com. Para los métodos de configuración específicos por dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Ruptela https://ruptela.com/ ya que los procedimientos y las funcionalidades del firmware pueden cambiar con el tiempo.
