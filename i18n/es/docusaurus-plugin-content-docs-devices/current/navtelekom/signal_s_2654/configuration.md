---
slug: /navtelekom/signal_s_2654/configuration
id: signal_s_2654-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2654 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Navtelekom СИГНАЛ S-2654 a Plaspy con ajustes de servidor compartido y herramientas del fabricante
keywords:
  - Configuración Navtelekom СИГНАЛ S-2654
  - Configuración S-2654 en Plaspy
  - Configuración del rastreador S-2654
  - Configuración rastreador vehicular GLONASS
  - NTC Configurator S-2654
  - DRC gestión remota Navtelekom
  - Seguimiento de flotas S-2654
  - Telemetría vehicular S-2654
  - Configuración de rastreadores Plaspy
  - Integración de flotas Plaspy
---

# Navtelekom - СИГНАЛ S-2654 Configuración

Esta página ofrece orientación pública para usar el rastreador vehicular Navtelekom СИГНАЛ S-2654 con Plaspy. Se enfoca en los pasos prácticos y los ajustes visibles que necesita aplicar para apuntar el dispositivo a Plaspy y que el rastreador reporte posiciones GNSS y telemetría a la plataforma.

Plaspy usa ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor que utilice, como NTC Configurator o DRC. Antes de aplicar cambios, consulte la documentación del fabricante para detalles específicos del equipo.

## Resumen de la configuración

Configurar el S-2654 para Plaspy prepara el equipo para reenviar ubicación y telemetría en tiempo real al endpoint de ingestión de Plaspy y para que el dispositivo aparezca en su consola Plaspy para monitoreo y reportes en vivo.

- Apunte el dispositivo a Plaspy usando el endpoint y puerto compartido de Plaspy.
- Verifique que el módem 3G y las SIM duales (si aplica) tengan conexión celular activa.
- Use herramientas del fabricante como NTC Configurator o DRC para escribir y guardar los ajustes de servidor y transporte.
- Compruebe que el dispositivo reporte correctamente a Plaspy y que la ubicación y la telemetría de entradas aparezcan en la plataforma.
- Opcionalmente habilite el registro local en microSD para conservar registros durante pérdidas temporales de conectividad.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Acceso físico al S-2654 y a las herramientas de configuración del fabricante como NTC Configurator o el sistema de gestión remota DRC.
- Tarjeta(s) SIM activa(s) instalada(s) y conectividad celular verificada en el módem 3G integrado.
- Antenas externas GNSS y GSM conectadas si su instalación las requiere para una recepción confiable.
- Fuente de alimentación y batería interna opcional con carga suficiente para que el dispositivo arranque y aplique los ajustes.
- Tarjeta microSD insertada si planea usar registro local para reconciliar datos sin conexión.
- Documentación del fabricante o notas de la versión correspondientes a la versión de firmware instalada en su equipo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el S-2654 envía posiciones GNSS y telemetría por su enlace celular al endpoint de ingestión de Plaspy y queda visible en Plaspy para seguimiento, alertas y reportes.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy indicados más arriba.
- La telemetría del dispositivo y los informes de eventos se envían a Plaspy, donde se analizan y presentan en paneles y reportes.
- Entradas como ignición, entradas digitales y telemetría serial/CAN se transmiten a Plaspy según lo configure el firmware y el protocolo del fabricante.
- El registro local en microSD actúa como un buffer de datos que puede conciliarse con los registros de Plaspy cuando se restablece la conectividad.
- La detección automática de protocolos de Plaspy facilita aceptar datos del S-2654 sin necesidad de seleccionar manualmente el protocolo en la plataforma.

## Flujo de configuración típico

1. Acceda al método o software oficial de configuración del fabricante, como NTC Configurator o la herramienta de gestión remota DRC.
2. Localice en el configurador los ajustes de TCP UDP server o GPRS server e ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto remoto del servidor en 8888, que Plaspy usa para todos los dispositivos.
4. Elija UDP o TCP en los ajustes de transporte del dispositivo si el equipo requiere selección de transporte.
5. Guarde o aplique la configuración en la herramienta del fabricante y escriba los ajustes en el dispositivo.
6. Reinicie el dispositivo si la herramienta o el firmware exige un reinicio para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy buscando el rastreador en la consola Plaspy y confirmando actualizaciones recientes de ubicación y telemetría.

## Ejemplos de comandos de configuración

El S-2654 normalmente se configura mediante las herramientas GUI del fabricante o el sistema de gestión remota. Las cadenas de comandos exactas o los comandos SMS varían según el firmware y el conjunto de herramientas del proveedor, por lo que debe seguir las instrucciones de NTC Configurator o DRC para su versión de firmware. Dado que los formatos de comando son específicos del fabricante y pueden cambiar entre versiones, consulte la documentación de Navtelekom o el configurador del dispositivo para la sintaxis y ejemplos exactos.

## Notas de configuración

- El S-2654 figura como archivado por el fabricante; la disponibilidad de firmware y versiones de las herramientas puede diferir de los modelos actuales, por lo que verifique la compatibilidad antes del despliegue.
- Algunas instalaciones requieren el uso de NTC Configurator o del sistema DRC para aplicar los ajustes de servidor y transporte; siga el flujo de trabajo específico de la herramienta.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos, pero el equipo puede venir configurado por defecto en uno y requerir selección manual.
- Utilice el registro en microSD como buffer para huecos de cobertura y valide los registros locales al conciliar registros faltantes en Plaspy.
- Las diferencias entre versiones de firmware pueden cambiar los nombres de menú y los flujos de configuración. Siempre contraste los ajustes con las notas de la versión del fabricante.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СИГНАЛ S-2654 con Plaspy permite a las organizaciones acceder a posicionamiento GNSS y telemetría casi en tiempo real dentro de un entorno unificado de gestión de flotas. Las opciones industriales de E/S y las salidas serial/CAN del S-2654 lo hacen adecuado para casos de uso con telemetría intensiva, donde Plaspy puede centralizar mapas, alertas y reproducción histórica para operaciones, flotas de servicio y monitoreo de activos.

Para saber más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para instrucciones de configuración específicas, notas de firmware y herramientas actualizadas consulte el sitio del fabricante https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
