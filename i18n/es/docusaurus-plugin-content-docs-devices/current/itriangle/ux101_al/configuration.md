---
slug: /itriangle/ux101_al/configuration
id: ux101_al-configuration
sidebar_label: Configuration
title: iTriangle - UX101-AL++ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iTriangle UX101-AL++ con ajustes de servidor Plaspy y lista de verificación
keywords:
  - configuración iTriangle UX101-AL++
  - instalación iTriangle UX101-AL++
  - configuración de servidor iTriangle
  - configuración Plaspy UX101-AL++
  - configuración GPS UX101-AL++
  - guía de instalación dispositivo iTriangle
  - rastreo de flotas UX101-AL++
  - configuración rastreador Plaspy
  - configuración servidor rastreador GPS
  - configuración telemática vehicular
---

# iTriangle - Configuración del UX101-AL++

Esta página documenta el contexto público de configuración para usar el iTriangle UX101-AL++ con Plaspy. Consolida los ajustes esenciales del servidor y la guía práctica que necesita para apuntar el dispositivo a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría. El UX101-AL++ es un rastreador GPS robusto, certificado AIS 140, y registrador de datos telemáticos 4G diseñado para aplicaciones vehiculares e industriales exigentes; esta guía se centra únicamente en la información de conectividad pública necesaria para su integración con Plaspy.

Plaspy usa ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate esta página como una guía de integración de plataforma y no como un sustituto del manual oficial de iTriangle.

## Resumen de la configuración

Este proceso prepara el UX101-AL++ para enviar datos de ubicación, eventos y telemetría a Plaspy, de modo que el dispositivo sea visible y manejable dentro de la plataforma. Se centra en configurar el endpoint del servidor, el transporte y verificar la conectividad para que sus unidades aparezcan en los paneles y reportes de Plaspy.

- Configure el dispositivo para reportar al endpoint del servidor Plaspy para que las posiciones GNSS y eventos lleguen a la plataforma.
- Establezca el transporte y el puerto del servidor acorde con los requerimientos de Plaspy para garantizar sesiones TCP o UDP exitosas.
- Valide la conectividad celular, el APN y cualquier ajuste de eSIM o plan de datos para habilitar la transmisión por LTE y redes de respaldo.
- Confirme que el equipo se registre y aparezca en Plaspy, y pruebe disparadores clave como encendido, manipulación o reporte de pánico.
- Guarde y aplique los ajustes de firmware y red, y siga las indicaciones del fabricante para reiniciar el equipo si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que solo necesita configurar el puerto 8888 para los rastreadores compatibles

## Requisitos típicos antes de la configuración

- Una unidad UX101-AL++ alimentada y con acceso al método de configuración del fabricante o a la herramienta de servicio
- Conectividad celular activa mediante eSIM o un plan de datos compatible con las bandas y la red del dispositivo
- APN y datos del operador listos para configurar si su firmware o proveedor los requiere
- Identificadores del dispositivo como IMEI o número de serie disponibles para el registro en la plataforma y la resolución de problemas
- Acceso a la ubicación del dispositivo o a la instalación física si hay que verificar la colocación de la antena o el cableado de E/S
- Una cuenta de Plaspy con los detalles de aprovisionamiento del dispositivo para confirmar su aparición en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el UX101-AL++ transmite posiciones GNSS, telemetría y datos de eventos al endpoint del servidor Plaspy. El dispositivo usará transporte TCP o UDP en el puerto compartido de Plaspy y la plataforma detectará automáticamente el protocolo entrante y decodificará los mensajes para su visualización.

- El rastreador se configura para reportar a d.plaspy.com o a 54.85.159.138 usando el puerto 8888
- Los datos del dispositivo viajan por LTE con conmutación a redes de generación inferior según lo permitan el hardware y el operador
- Eventos como encendido, manipulación, pánico y activaciones del acelerómetro se envían a Plaspy para alertas y registro
- La telemetría, incluyendo diagnósticos CAN y otras entradas de sensores, se reenvía a Plaspy para paneles e informes
- Plaspy ingiere los datos y detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo manualmente en la plataforma

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de iTriangle o al software proporcionado por el fabricante o su proveedor.
2. En los ajustes TCP, UDP o de servidor del dispositivo, ingrese el dominio del servidor d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto que Plaspy usa para todos los dispositivos compatibles.
4. Elija el transporte UDP o TCP en el dispositivo si la herramienta de configuración solicita una selección de transporte.
5. Ingrese el APN y los ajustes del operador o confirme la activación de la eSIM interna para que el dispositivo pueda establecer sesiones de datos.
6. Aplique o guarde los cambios de configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy confirmando su presencia y la llegada de mensajes en la plataforma Plaspy.

## Comandos de ejemplo para configuración

Los comandos y el formato exacto dependen del firmware de iTriangle y de la herramienta de configuración del fabricante que utilice. Los dispositivos iTriangle pueden configurarse mediante una herramienta de software del proveedor, una interfaz web o comandos SMS según la versión de firmware. Consulte la documentación oficial de iTriangle o a su proveedor para la sintaxis y ejemplos de comandos para su versión de firmware.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la interfaz de configuración, la sintaxis de comandos o los campos requeridos. Verifique los comandos en la referencia de iTriangle.
- Cuando el dispositivo requiera elegir UDP o TCP, seleccione el transporte apropiado para su instalación y siga las instrucciones de la herramienta del dispositivo; Plaspy detectará el protocolo entrante automáticamente.
- Confirme el APN y los ajustes del operador antes de probar la conectividad para minimizar falsos negativos durante la validación.
- Use el IMEI del dispositivo y los registros del fabricante para solucionar intentos de conexión si el equipo no aparece en Plaspy.
- Para dispositivos con soporte de eSIM interna, asegúrese de que la activación de la eSIM y el aprovisionamiento de red estén completos antes de apuntar el dispositivo a d.plaspy.com o 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Combinar el iTriangle UX101-AL++ con Plaspy ofrece a las organizaciones una forma práctica de capturar ubicación en tiempo real, diagnósticos del vehículo y datos de eventos desde vehículos robustos y activos industriales. Las características de hardware del UX101-AL++, como el doble CAN y la carcasa resistente, junto con la ingestión y detección de protocolos de Plaspy, proporcionan visibilidad confiable para operaciones de flota, flujos de trabajo telemáticos para OEM y casos de uso de seguridad de activos.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles específicos de configuración más actuales por dispositivo, notas de firmware y la orientación del fabricante, verifique la información en el sitio oficial de iTriangle https://www.itriangle.net/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
