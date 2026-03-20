---
slug: /navtelekom/smart_s_2420/configuration
id: smart_s_2420-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2420 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom SMART S-2420 con Plaspy y los ajustes de servidor necesarios para su integración
keywords:
  - Configuración Navtelekom SMART S-2420
  - Instalación Navtelekom SMART S-2420
  - Integración SMART S-2420 Plaspy
  - Configuración de servidor SMART S-2420
  - Configuración de rastreador GPS SMART S-2420
  - Configuración rastreador vehicular Navtelekom
  - Configuración rastreador Plaspy
  - Ajustes de servidor dispositivo Plaspy
  - Configuración GPS Plaspy rastreador
  - Configuración Bluetooth SMART S-2420
---

# Navtelekom - SMART S-2420 - Configuración

Esta página documenta el contexto público de configuración para usar el Navtelekom SMART S-2420 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica qué preparar antes de la integración y describe el flujo práctico para apuntar el dispositivo a Plaspy para que reporte ubicación, telemetría y estados de entradas y salidas a la plataforma. La guía a continuación se basa en la información pública disponible para el SMART S-2420 y en los valores estándar del servidor Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use el método de configuración que Navtelekom provea para el SMART S-2420 y siga los valores de servidor de Plaspy listados aquí para garantizar una conectividad fiable.

## Resumen de configuración

El objetivo de esta configuración es preparar el SMART S-2420 para entregar ubicación y telemetría básica a Plaspy, de modo que el dispositivo aparezca en su cuenta de Plaspy y genere los eventos e informes esperados. Normalmente esto implica configurar el equipo para enviar paquetes uplink al endpoint del servidor Plaspy y confirmar que los mensajes llegan correctamente.

- Configure el rastreador para que informe al endpoint y puerto del servidor Plaspy para que Plaspy reciba paquetes de posición y telemetría.
- Valide la conectividad a la red móvil y la funcionalidad de la SIM para el módem 2G del S-2420 antes de la puesta en servicio.
- Utilice la herramienta de configuración de Navtelekom o la configuración local por Bluetooth para introducir los ajustes del servidor Plaspy.
- Guarde y aplique la configuración, luego confirme que el dispositivo es visible en Plaspy y que reporta GPS y estados de entradas/salidas.
- Si es necesario, reinicie el dispositivo después de aplicar los ajustes para iniciar sesiones de red limpias.

## Ajustes del servidor Plaspy

Utilice los siguientes valores públicos del servidor Plaspy al configurar el SMART S-2420. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so devices can use either UDP or TCP as supported

## Requisitos típicos antes de la instalación

- Alimentación del vehículo disponible y conectada, ya que el SMART S-2420 no tiene batería interna y está diseñado para instalación permanente.
- Una SIM funcional con servicio 2G en la región donde operará el dispositivo, porque el S-2420 emplea un módem GSM 2G.
- Acceso al método oficial de configuración de Navtelekom para el S-2420, como la herramienta de configuración local por Bluetooth o el software del proveedor.
- Acceso físico al equipo para verificar el cableado de entradas y salidas y para realizar un reinicio si es necesario.
- Una cuenta en Plaspy y familiaridad básica con la plataforma para poder confirmar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2420 envía periódicamente paquetes de posición y telemetría por su enlace uplink 2G al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo apunta a Plaspy y existe conectividad de red, Plaspy recibe las posiciones, los estados de entradas digitales y otra telemetría básica para visualización e informes.

- El rastreador transmite fixes de GPS y GLONASS a través del módem 2G hacia el endpoint del servidor Plaspy.
- Los eventos de entradas y salidas digitales se reportan como telemetría y pueden mapearse en Plaspy para alertas y registro.
- El dispositivo utiliza la dirección y el puerto compartidos de Plaspy para que los mensajes se encaminen a la plataforma.
- La detección automática de protocolo de Plaspy permite que el rastreador use UDP o TCP según corresponda al dispositivo y a la red.
- El Bluetooth 4.0 del S-2420 está disponible para configuración local y diagnóstico durante la instalación.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Navtelekom para el SMART S-2420 (herramienta local por Bluetooth o software del proveedor).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del servidor en 8888, ya que todos los dispositivos Plaspy usan el mismo puerto.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere una selección de transporte.
5. Aplique o guarde los ajustes en la herramienta de Navtelekom.
6. Reinicie el dispositivo si la herramienta de configuración o la documentación recomienda un reinicio para establecer sesiones de red limpias.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta y que se reciben actualizaciones de posición y telemetría.

## Ejemplos de comandos de configuración

El SMART S-2420 se configura típicamente usando la herramienta local Bluetooth de Navtelekom o el software del fabricante. Los formatos exactos de comandos o cadenas SMS varían según el firmware y la utilidad del proveedor. Dado que los comandos públicos disponibles difieren según el firmware y la revisión en modelos archivados, consulte la documentación de Navtelekom o utilice la herramienta Bluetooth provista para introducir el servidor d.plaspy.com o 54.85.159.138 y el puerto 8888, y seleccione UDP o TCP donde sea necesario.

Si dispone de cadenas de comandos publicadas por Navtelekom para este modelo, aplíquelas en el orden que indique la documentación del fabricante y conserve cualquier marcador de posición como valores APN tal como se indiquen. Para verificación, revise los registros de respuesta del dispositivo en la herramienta de configuración y luego confirme que los mensajes llegan a Plaspy.

## Notas de configuración

- El SMART S-2420 es un modelo archivado, por lo que los conjuntos de firmware y comandos pueden diferir entre unidades; revise las descargas de Navtelekom o el portal DRC para obtener la documentación de firmware correcta antes de cambiar ajustes.
- Debido al uso de 2G, verifique la disponibilidad de la red celular en su región antes del despliegue.
- La elección entre UDP y TCP puede afectar cómo el dispositivo maneja reintentos y conexiones; Plaspy admite ambos y detecta el protocolo automáticamente.
- Use el método de configuración Bluetooth de Navtelekom para la configuración local y evite la complejidad de comandos SMS cuando sea posible.
- Siempre guarde y, si se recomienda, reinicie el dispositivo después de aplicar los ajustes del servidor Plaspy para asegurar que el cambio tenga efecto.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2420 con Plaspy ofrece una ruta sencilla para la visibilidad de vehículos, la recopilación de telemetría básica y flujos de control remoto simples, como inmovilización mediante salidas de control. Para organizaciones que necesitan una solución económica y de nivel entrada con posicionamiento GLONASS/GPS y reportes de entradas/salidas digitales, emparejar el S-2420 con Plaspy permite monitoreo centralizado y reporte de eventos en una sola plataforma.

To learn more about Plaspy and supported device configuration options visit https://www.plaspy.com. For the most current device specific setup instructions, firmware files, and official manuals for the SMART S-2420 consult Navtelekom at https://www.navtelecom.ru/ since manufacturer specifications and firmware behavior can change over time.
