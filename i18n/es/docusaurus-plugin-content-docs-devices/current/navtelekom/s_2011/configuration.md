---
slug: /navtelekom/s_2011/configuration
id: s_2011-configuration
sidebar_label: Configuration
title: Navtelekom - СТАРТ S-2011 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Navtelekom СТАРТ S-2011 a Plaspy para ubicación en tiempo real y reporte de eventos
keywords:
  - Configuración Navtelekom START S-2011
  - Configuración START S-2011
  - Configuración rastreador GPS Navtelekom
  - Configuración rastreador Plaspy
  - Guía configuración rastreador vehicular
  - Ajustes servidor START S-2011
  - Configuración seguimiento de flota Plaspy
  - Configuración rastreador GLONASS GPS
  - Consejos instalación START S-2011
  - Configuración plataforma GPS Plaspy
---

# Configuración del Navtelekom - СТАРТ S-2011

Esta página describe la configuración pública necesaria para usar el Navtelekom СТАРТ S-2011 con Plaspy. Explica los ajustes de servidor prácticos y el flujo general de configuración para apuntar el rastreador START S-2011 a Plaspy, permitir ubicación en tiempo real, reporte de eventos e integración telemática básica. El contenido está pensado para instaladores e integradores que preparan el equipo para comunicarse con la plataforma Plaspy usando parámetros públicos y reutilizables.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración desde el fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice (configuradores locales por Bluetooth o USB, o sistemas de gestión remota). Use esta guía junto con la documentación oficial de Navtelekom y las herramientas de configuración del dispositivo para completar una integración confiable.

## Resumen de la configuración

El objetivo es preparar el START S-2011 para enviar posiciones GNSS y telemetría de eventos al servicio Plaspy, validar la conectividad y lograr que el dispositivo aparezca en su consola de Flota en Plaspy. Esta página se enfoca en los ajustes públicos comunes que aplicará en el dispositivo y en los pasos de verificación para confirmar el reporte.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que los paquetes de posición y eventos se enruten correctamente.  
- Configurar el transporte y el puerto del dispositivo para que establezca sesión con Plaspy.  
- Asegurar que el rastreador tenga conectividad celular funcional y los ajustes APN del fabricante correctos para enviar datos.  
- Utilizar las herramientas de configuración del dispositivo (Bluetooth, USB Type-C o DRC del fabricante) para aplicar ajustes y actualizar firmware.  
- Validar que el equipo sea visible en Plaspy y que las actualizaciones de posición y eventos aparezcan como se espera.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: supports UDP or TCP on port 8888 (configure UDP or TCP on the device if required)  
- Plaspy automatically detects the tracker protocol when the device reports to the shared server and port

(Se mantienen los valores anteriores tal cual para asegurar compatibilidad y evitar errores de copia)

## Requisitos habituales antes de la configuración

- Confirme que el START S-2011 tenga la batería de respaldo cargada y alimentación vehicular estable durante la configuración.  
- Inserte una nano-SIM válida con un plan de datos activo y verifique el registro en la red celular y la disponibilidad de datos móviles.  
- Tenga acceso al método de configuración del fabricante que vaya a usar (NTC Configurator por Bluetooth 4.0, conexión USB Type-C o el sistema de gestión remota DRC de Navtelekom).  
- Disponga de la información de su cuenta Plaspy y asegúrese de poder identificar el dispositivo en el panel de Plaspy después de la configuración.  
- Verifique la posibilidad de actualizar firmware y parámetros (herramientas de instalador o portal del proveedor) si el equipo requiere un flujo de configuración específico por versión de firmware.  
- Acceda a la documentación del dispositivo o al NTC Configurator para aplicar servidor, puerto y ajustes de transporte.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el START S-2011 envía posiciones GNSS y telemetría de eventos (cambios en entradas discretas, estado de alimentación, eventos de manipulación o control de inmovilizador) al endpoint y puerto del servidor Plaspy, para que Plaspy pueda mostrar posiciones en tiempo real, alertas e informes históricos.

- El rastreador se apunta al endpoint d.plaspy.com (o 54.85.159.138) y envía datos al puerto 8888.  
- En el dispositivo se configura el transporte como UDP o TCP; Plaspy acepta ambos y procesará los paquetes entrantes.  
- Plaspy detecta automáticamente el protocolo del rastreador y mapea la telemetría entrante en la plataforma para mapas, alertas e informes.  
- Las entradas discretas y los eventos de alimentación/batería se reenvían a Plaspy como alarmas o cambios de estado para monitoreo operativo.  
- Las salidas de control del dispositivo pueden utilizarse junto con acciones o reglas locales en Plaspy para inmovilización remota o señalización.

## Flujo de configuración común

1. Abra la herramienta oficial de configuración Navtelekom para el START S-2011 (NTC Configurator por Bluetooth, utilidad USB Type-C o sistema remoto DRC).  
2. En los ajustes de servidor del equipo, ingrese la dirección del servidor Plaspy como d.plaspy.com o 54.85.159.138.  
3. Ajuste el puerto del dispositivo a 8888 (recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Si el dispositivo solicita seleccionar transporte, elija UDP o TCP según la preferencia del instalador o las condiciones de red.  
5. Aplique o guarde la configuración en la herramienta del fabricante y, si se solicita, suba los cambios de firmware o del perfil de configuración.  
6. Reinicie o haga un ciclo de energía del START S-2011 si las instrucciones del fabricante recomiendan un reinicio para aplicar cambios de red.  
7. Valide que el dispositivo reporte a Plaspy revisando en el panel de Plaspy las actualizaciones GNSS y los mensajes de eventos del equipo.

## Ejemplos de comandos de configuración

El START S-2011 puede configurarse con las herramientas Navtelekom usando Bluetooth, USB o el sistema DRC del fabricante; la sintaxis exacta y los formatos varían según el firmware y la utilidad de configuración. Como los comandos específicos del modelo y los formatos por SMS o cadena los proporciona el fabricante, la recomendación es usar el NTC Configurator o la herramienta DRC oficiales para aplicar de forma confiable la dirección del servidor, el puerto y el transporte.

Al usar cualquier método de comando del fabricante, asegúrese de aplicar estos ajustes públicos de Plaspy:
- Server: d.plaspy.com (or 54.85.159.138)  
- Port: 8888  
- Transport: UDP or TCP

Consulte la documentación de Navtelekom o el NTC Configurator para los formatos de comando precisos si necesita una configuración por CLI o tipo SMS. La herramienta del fabricante presentará los campos correctos para ingresar los valores anteriores.

## Notas de configuración

- Las diferencias de firmware pueden cambiar menús de configuración, nombres de campos y opciones de transporte soportadas; confirme la versión de firmware del dispositivo y siga la guía del fabricante correspondiente.  
- TCP versus UDP: seleccione el transporte que soporte su red y la preferencia del instalador; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo.  
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto 8888 para conexiones entrantes de rastreadores, lo que simplifica el despliegue y la configuración de servidores.  
- Asegúrese de que los parámetros APN y de datos móviles estén correctamente configurados mediante el NTC Configurator o DRC para que el rastreador pueda establecer sesión de datos antes de enviar paquetes a Plaspy.  
- Para instalaciones ocultas, valide los niveles de señal GNSS y GSM antes del montaje final para evitar conectividad intermitente tras la instalación.

## Por qué usar Plaspy con esta configuración

Usar el START S-2011 con Plaspy ofrece una ruta simple para incorporar reportes de posición GLONASS/GPS y telemetría de eventos esenciales a un flujo de trabajo de gestión de flota. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos reducen la complejidad de configuración por dispositivo, facilitando la puesta en servicio de múltiples unidades de forma consistente y logrando visibilidad para mapeo, alertas e informes de incidentes.

Para obtener más información sobre Plaspy y su integración con rastreadores compatibles, visite https://www.plaspy.com. Para detalles de configuración específicos del dispositivo, notas de firmware y comandos oficiales del START S-2011, consulte la documentación del fabricante en https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
