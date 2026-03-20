---
slug: /careu/u1_plus/configuration
id: u1_plus-configuration
sidebar_label: Configuration
title: CAREU - U1 PLUS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CAREU U1 PLUS con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - configuración CAREU U1 PLUS
  - instalación CAREU U1 PLUS
  - CAREU U1 PLUS Plaspy
  - configuración del servidor CAREU U1 PLUS
  - configuración del rastreador GPS CAREU U1 PLUS
  - configuración de dispositivo Plaspy
  - ajustes de servidor Plaspy
  - configuración telemática vehicular
  - configuración de rastreo de flotas
  - integración OBD II CAN
---

# CAREU - U1 PLUS Configuración

Esta página documenta el contexto público de configuración para usar el rastreador CAREU U1 PLUS con Plaspy. Explica los ajustes compartidos del servidor que Plaspy requiere y el flujo general para preparar un equipo U1 PLUS para que envíe posiciones y telemetría de vehículo a la plataforma Plaspy. Use esta guía como referencia práctica para los pasos de integración de disponibilidad pública.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos por parte del fabricante varían según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Siempre verifique las instrucciones del fabricante para comportamientos específicos del modelo y dependencias de firmware antes de aplicar cambios de configuración.

## Resumen de configuración

El objetivo al configurar un CAREU U1 PLUS para Plaspy es garantizar que el dispositivo pueda transmitir posiciones GNSS y telemetría del vehículo de forma confiable al backend de Plaspy y resultar visible en la plataforma. La configuración prepara la red del equipo, los ajustes de transporte y cualquier parámetro propio del fabricante para que Plaspy pueda ingerir y normalizar los datos del dispositivo.

- Apuntar el rastreador al endpoint compartido de Plaspy para que los paquetes telemáticos lleguen a la plataforma.
- Seleccionar el transporte (UDP o TCP) que requiera el equipo o que sea preferible para su despliegue.
- Configurar el puerto común de Plaspy para que el backend acepte la telemetría entrante del rastreador.
- Verificar la conectividad celular y que el dispositivo pueda alcanzar Plaspy probando una posición o latido (heartbeat).
- Confirmar que los flujos OBD II / CAN y sensores auxiliares estén habilitados si necesita que datos de motor o combustible se reenvíen a Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el CAREU U1 PLUS. Plaspy espera que todos los dispositivos compatibles utilicen el mismo puerto y detecta el protocolo del rastreador automáticamente.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP (configure el rastreador para usar UDP o TCP según se requiera)
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al puerto configurado

## Requisitos antes de la configuración

- Una unidad CAREU U1 PLUS alimentada e instalada con antena y cableado adecuados para el vehículo.
- Conectividad celular activa con una SIM habilitada para datos compatible con las bandas y la red en su región.
- Acceso al método oficial de configuración CAREU o al software proporcionado por el fabricante (herramienta web, aplicación de escritorio, app Bluetooth o opciones de configuración por SMS).
- Conocimiento del IMEI del dispositivo o identificador único que use en sus registros de flota para poder emparejar el equipo en Plaspy cuando reporte.
- Información del firmware vigente y acceso a herramientas de actualización de firmware si el equipo requiere FOTA o una actualización para ciertas funciones.
- Señal celular adecuada en el lugar de instalación para validar la transmisión de telemetría en vivo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el CAREU U1 PLUS envía ubicación GNSS y telemetría del vehículo al backend de Plaspy mediante enlaces celulares. Plaspy ingiere actualizaciones de posición, telemetría CAN/OBD, eventos del acelerómetro y entradas de sensores para que los gestores de flota reciban datos consolidados y accionables.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138.
- Los paquetes de telemetría y posición se envían al puerto 8888 del servidor Plaspy.
- El dispositivo puede usar UDP o TCP según la configuración; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.
- La telemetría CAN/OBD y los eventos de sensores se reenvían a Plaspy, donde se normalizan y se correlacionan con los datos de ubicación.
- Plaspy ofrece visibilidad en tiempo real para rastreo, eventos de geocerca y alarmas del dispositivo reportadas por el rastreador.

## Flujo de configuración recomendado

Siga estos pasos prácticos al integrar un CAREU U1 PLUS con Plaspy. Los menús y comandos exactos dependen de la herramienta de configuración de CAREU y del firmware, así que adáptelos según sea necesario.

1. Acceda al método o software oficial de configuración de CAREU proporcionado por el fabricante (herramienta de escritorio, app móvil, configuración por Bluetooth o interfaz SMS/AT).
2. En los ajustes de servidor o backend del dispositivo, ingrese la dirección del servidor Plaspy como d.plaspy.com o, si la herramienta exige IP, use 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888. Todos los dispositivos configurados para Plaspy usan este mismo puerto.
4. Si el equipo requiere selección de transporte, elija UDP o TCP según la preferencia de su sitio o la opción soportada por el dispositivo.
5. Aplique o guarde la configuración en la herramienta CAREU y confirme que los ajustes se escribieron en el equipo.
6. Reinicie o haga un ciclo de alimentación del rastreador si el fabricante lo exige para que los cambios surtan efecto.
7. Valide que el equipo reporte a Plaspy enviando una posición de prueba o verificando el primer latido en su cuenta Plaspy; confirme que el identificador del dispositivo coincide con sus registros.

## Ejemplos de comandos de configuración

El CAREU U1 PLUS puede configurarse mediante las herramientas del fabricante, Bluetooth o interfaces SMS/comandos según el firmware. Los comandos públicos exactos varían por firmware y variante de modelo; la documentación y las herramientas del fabricante son las fuentes autorizadas.

Si utiliza métodos SMS o comandos AT proporcionados por CAREU, siga la sintaxis de comandos indicada en la documentación oficial de CAREU. Dado que los comandos de configuración del U1 PLUS dependen del firmware y de las utilidades del proveedor, esta página no publica un conjunto genérico de comandos. Consulte las guías de CAREU para ejemplos de comandos y utilice marcadores de posición cuando sea necesario (por ejemplo, un marcador de APN como [apn] al configurar parámetros de datos móviles).

## Notas de configuración

- Las variaciones de firmware pueden cambiar los menús de configuración disponibles, los transportes soportados y la sintaxis de comandos; confirme la versión del firmware antes de aplicar los pasos.
- TCP y UDP se comportan de manera diferente en redes con pérdidas; elija UDP para menor sobrecarga y TCP si necesita entrega garantizada de paquetes y el dispositivo/firmware lo soporta.
- Use el dominio d.plaspy.com cuando sea posible; si DNS no está disponible en su entorno, la IP 54.85.159.138 es una alternativa.
- El puerto 8888 es el puerto compartido de Plaspy para todos los dispositivos; no cambie este valor salvo indicación del soporte de Plaspy.
- Mantenga registro de los identificadores de los dispositivos y notas de instalación para poder emparejar la telemetría entrante en Plaspy con las unidades físicas durante la validación.

## Por qué usar Plaspy con esta configuración

Configurar el CAREU U1 PLUS para reportar a Plaspy combina un rastreador robusto de grado vehicular con una plataforma diseñada para normalizar telemática y presentar datos de flota accionables. Para organizaciones que gestionan camiones pesados, despliegues en redes mixtas y telemetría multisensor, esta combinación reduce el esfuerzo de integración y entrega visibilidad consolidada sobre ubicación, métricas de motor, monitoreo de combustible y eventos de seguridad.

Para saber más sobre Plaspy y cómo gestiona la incorporación de equipos e ingestión de telemetría, visite https://www.plaspy.com. Para los detalles más actualizados específicos del dispositivo, notas de firmware y herramientas del fabricante para el CAREU U1 PLUS, verifique la documentación oficial de CAREU en https://www.systech-iot.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
