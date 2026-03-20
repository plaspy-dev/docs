---
slug: /navtelekom/signal_s_2653/configuration
id: signal_s_2653-configuration
sidebar_label: Configuration
title: Navtelekom - SIGNAL S-2653 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Navtelekom SIGNAL S-2653 para integración con Plaspy con ajustes de servidor y pasos prácticos
keywords:
  - Configuración Navtelekom SIGNAL S-2653
  - Configuración SIGNAL S-2653
  - Rastreador Navtelekom Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador de vehículo
  - Configuración rastreador gestión de flotas
  - Ajustes servidor SIGNAL S-2653
  - Detección protocolo rastreador
  - Integración rastreador Plaspy
---

# Navtelekom - Configuración del SIGNAL S-2653

Esta página describe el contexto público de configuración para usar el Navtelekom SIGNAL S-2653 con Plaspy. Aquí encontrará los ajustes de servidor que deben aplicarse y los pasos prácticos habituales para dirigir el dispositivo hacia Plaspy, de modo que el equipo pueda transmitir posición y telemetría a la plataforma. La información está dirigida a instaladores y operadores técnicos que preparan el S-2653 para su integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SIGNAL S-2653 incluye características relevantes para la puesta en servicio, como antenas GNSS externas, módem dual SIM 2G, registro en SD y el NTC Configurator para configuración; estas funciones influyen en los flujos de trabajo comunes que se describen a continuación.

## Resumen de la configuración

Configurar el SIGNAL S-2653 para Plaspy prepara el rastreador para enviar ubicación y telemetría de forma fiable a la plataforma y garantiza que sea visible en los paneles de gestión de la flota. El objetivo es aplicar el punto final de Plaspy y los ajustes de transporte, confirmar conectividad y reportes, y verificar el comportamiento de registro de respaldo.

- Apuntar el rastreador al endpoint del servidor Plaspy y al puerto correcto para que los mensajes lleguen a su cuenta.
- Seleccionar el transporte (UDP o TCP) si la configuración del dispositivo lo solicita.
- Validar la conectividad celular y la disponibilidad de la(s) SIM para que la unidad pueda establecer sesiones de datos.
- Guardar y aplicar la configuración, luego confirmar que el equipo informa a Plaspy y aparece en los paneles de la plataforma.
- Verificar el registro en tarjeta SD y el comportamiento de la batería de respaldo como alternativa ante conectividad intermitente.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Estos valores son los detalles públicos del endpoint de Plaspy que se requieren al configurar el rastreador para que reporte a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Acceso a la herramienta o método oficial de configuración del fabricante, como el NTC Configurator mencionado en la documentación de Navtelekom.
- Un SIGNAL S-2653 instalado y alimentado con las antenas GNSS y GSM externas conectadas según lo exige la instalación.
- SIM(s) celulares activas instaladas y capaces de registrarse en las bandas 2G soportadas por el equipo.
- Conexión de escritorio o móvil a la interfaz de configuración del dispositivo (Bluetooth local o herramienta del fabricante) según las instrucciones de Navtelekom.
- Disponibilidad del firmware actual y de la documentación técnica del fabricante para la revisión de hardware específica que se está configurando.
- Medios para monitorear el dispositivo después de la puesta en marcha y validar que reporta correctamente en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El SIGNAL S-2653 se configura para enviar mensajes de posición y telemetría por su enlace celular al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador apunta al servidor Plaspy y se define el transporte, Plaspy recibe los mensajes y la plataforma se encarga de detectar y parsear el protocolo.

- El equipo envía mensajes periódicos o por eventos a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El rastreador puede usar transporte UDP o TCP según la configuración; Plaspy acepta ambos.
- Plaspy detecta e interpreta automáticamente el protocolo del rastreador, por lo que normalmente no se requiere seleccionar el protocolo en el servidor.
- Los mensajes de evento y la telemetría provenientes de entradas, CAN o sensores a bordo son reenviados a Plaspy para paneles y alertas.
- El registro en SD y la batería de respaldo interna proporcionan un mecanismo local de respaldo y datos que pueden sincronizarse cuando se restablece la conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Navtelekom (por ejemplo el NTC Configurator o una herramienta autorizada de campo).
2. Abra la sección de ajustes de servidor e ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 según lo requiere Plaspy.
4. Si la interfaz del equipo solicita elegir transporte, seleccione UDP o TCP según la preferencia del sitio; el equipo puede configurarse para usar cualquiera de los dos en el puerto 8888.
5. Aplique o guarde los cambios en la herramienta del fabricante y confirme que la configuración se ha escrito en el dispositivo.
6. Reinicie o corte y restablezca la alimentación del rastreador si las instrucciones del fabricante requieren un reinicio para aplicar los ajustes de red.
7. Valide que el rastreador informa a Plaspy comprobando la visibilidad del dispositivo y los mensajes recientes en la plataforma Plaspy y confirmando que la telemetría aparece.

## Comandos de configuración de ejemplo

Los comandos exactos y la sintaxis para configurar el SIGNAL S-2653 dependen de la herramienta del fabricante, la versión de firmware y de si la configuración se realiza vía Bluetooth, USB o un configurador central. Dado que Navtelekom proporciona un NTC Configurator y documentación del fabricante, siga los pasos del software oficial para establecer el servidor y el transporte.

Si utiliza un método por SMS o comandos de texto provisto por Navtelekom en su versión de firmware, convierta el dominio o la IP y el puerto del servidor al formato de comando requerido por el equipo. Mantenga los marcadores de posición donde se requiera (por ejemplo los marcadores de APN) y consulte la documentación del fabricante para la sintaxis precisa de los comandos.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los menús y la sintaxis de comandos; confirme siempre los pasos contra la revisión de firmware indicada en la documentación de Navtelekom.
- El comportamiento de doble SIM puede afectar qué SIM se usa para el enlace uplink; verifique la prioridad de SIM y las configuraciones de roaming al poner en servicio dispositivos para Plaspy.
- La elección entre TCP y UDP puede depender de la confiabilidad de la red y del comportamiento del operador; Plaspy acepta ambos transportes en el mismo puerto compartido.
- Dado que Plaspy detecta automáticamente el protocolo del rastreador, concentre la atención en los ajustes correctos de dominio/IP y puerto; la selección de protocolo suele gestionarla la plataforma.
- Si utiliza herramientas de configuración basadas en SMS de Navtelekom, mantenga los comandos y marcadores intactos y verifique que el dispositivo reconoce los ajustes antes del despliegue final.

## Por qué usar Plaspy con esta configuración

Usar el SIGNAL S-2653 con Plaspy proporciona a los operadores de flota visibilidad en tiempo real y la capacidad de combinar la posición GNSS, la telemetría del bus del vehículo y los reportes por eventos en una sola plataforma. Las funciones de registro y la energía de respaldo ayudan a preservar datos críticos de eventos durante cortes, mientras que el enlace celular dual SIM ofrece redundancia en entornos con redes mixtas.

Para conocer más sobre el uso de Plaspy con rastreadores compatibles y ver las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento de firmware y las especificaciones técnicas, verifique los detalles con el fabricante en https://www.navtelecom.ru/.
