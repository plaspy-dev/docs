---
slug: /thinkrace/traxbean_st2/configuration
id: traxbean_st2-configuration
sidebar_label: Configuration
title: ThinkRace - Traxbean ST2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar ThinkRace Traxbean ST2 y conectarlo a Plaspy con ajustes de servidor compartido y detección automática de protocolo
keywords:
  - Configuración ThinkRace Traxbean ST2
  - Configuración Traxbean ST2
  - ThinkRace ST2 Plaspy
  - Configuración servidor Traxbean ST2
  - Configuración GPS Traxbean ST2
  - Monitoreo Traxbean ST2
  - Configuración reloj inteligente para adultos mayores
  - Configuración tracker Plaspy
  - Configuración rastreador GPS wearable
  - Integración Traxbean ST2
---

# ThinkRace - Traxbean ST2 Configuración

Esta página describe el contexto público de configuración para usar el ThinkRace Traxbean ST2 con Plaspy. Resume la información práctica y pública que necesita para apuntar el dispositivo a Plaspy y habilitar el seguimiento en tiempo real, las alarmas SOS y la ingestión de telemetría de salud. El Traxbean ST2 es un reloj inteligente para cuidado de personas mayores con posicionamiento GPS, LBS, Wi‑Fi y Bluetooth, además de telemetría de salud continua que puede reenviar datos a servidores externos o a endpoints de plataformas.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando llega la telemetría. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía le ayuda a aplicar las configuraciones comunes de Plaspy y luego confirmar los pasos específicos del dispositivo con las herramientas o la documentación de ThinkRace.

## Resumen de configuración

Este proceso prepara el Traxbean ST2 para reenviar ubicación, eventos y telemetría de salud a Plaspy para que el dispositivo aparezca en su entorno de monitoreo Plaspy. El objetivo principal es apuntar el dispositivo al servidor de Plaspy, usar el puerto de la plataforma, elegir un transporte adecuado y confirmar que el dispositivo esté reportando.

- Configure el Traxbean ST2 para usar el endpoint de Plaspy d.plaspy.com o la IP 54.85.159.138 para que los datos lleguen a la plataforma.
- Establezca el puerto 8888 que Plaspy utiliza para todos los dispositivos soportados.
- Seleccione UDP o TCP como transporte si el dispositivo solicita una opción; Plaspy detectará automáticamente el protocolo.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con ubicación en vivo, SOS y telemetría de salud.
- Guarde y aplique la configuración usando el método de ThinkRace apropiado para su despliegue.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un Traxbean ST2 cargado y funcionando con permisos necesarios para configurar ajustes de red/servidor.
- Servicio celular activo y una SIM con datos habilitados si el dispositivo usa datos móviles para el reenvío al servidor.
- Acceso al método oficial de configuración de ThinkRace, como el portal del vendedor, herramienta de escritorio, aplicación móvil o interfaz de aprovisionamiento.
- Credenciales y acceso de cuenta para cualquier canal SaaS o consola de gestión de ThinkRace que utilice para aplicar los ajustes de servidor.
- Un plan de pruebas para validar el reporte, incluyendo una cuenta Plaspy o instancia de monitoreo disponible para confirmar la visibilidad del dispositivo.
- Acceso de red básico que permita conexiones salientes del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Cómo se conecta este tracker a Plaspy

Cuando está configurado, el Traxbean ST2 envía ubicación, eventos y telemetría fisiológica al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir y mostrar los datos. Plaspy agrega posiciones en tiempo real y alertas para que cuidadores u operadores monitoricen los dispositivos desde un único tablero.

- El dispositivo se configura para reenviar al servidor d.plaspy.com o directamente a 54.85.159.138.
- La telemetría se envía al puerto 8888, que Plaspy usa de forma uniforme para los dispositivos soportados.
- El transporte puede ser UDP o TCP según la configuración del dispositivo y las condiciones de red; Plaspy detecta el protocolo al recibir los paquetes.
- Los eventos SOS, detección de caídas y la telemetría de salud se entregan a Plaspy para alertas y visualización en el tablero.
- Una configuración correcta habilita el seguimiento en vivo y el historial en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de ThinkRace para configurar el Traxbean ST2 (portal del proveedor, herramienta de aprovisionamiento o app de gestión).
2. Ubique los ajustes de servidor o reporte remoto en la interfaz de configuración del dispositivo o en el flujo de aprovisionamiento.
3. Ingrese el servidor de Plaspy como d.plaspy.com o como el endpoint numérico 54.85.159.138.
4. Establezca el puerto en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
6. Aplique o guarde la configuración y, si la herramienta lo exige, empuje los ajustes al dispositivo.
7. Reinicie o haga un reboot del dispositivo si el fabricante lo recomienda para aplicar los cambios de red.
8. Valide que el dispositivo reporte a Plaspy comprobando la plataforma Plaspy para posición en vivo y telemetría.

## Ejemplos de comandos de configuración

No se incluyen cadenas públicas de comandos del dispositivo aquí. Los comandos exactos y el método para enviarlos varían según la herramienta de ThinkRace, el firmware y el canal de aprovisionamiento. En la mayoría de despliegues se utilizará la interfaz de gestión o la app de aprovisionamiento de ThinkRace para ingresar el endpoint de Plaspy d.plaspy.com (o 54.85.159.138) y el puerto 8888, y seleccionar UDP o TCP si se requiere elección de transporte.

Si utiliza una herramienta del fabricante que acepta líneas de comando o comandos tipo SMS, consulte la documentación oficial de ThinkRace o la guía de aprovisionamiento para la sintaxis exacta y el orden para aplicar dominio de servidor, IP, puerto y transporte.

## Notas de configuración

- Plaspy utiliza el mismo puerto 8888 para todos los trackers soportados y detecta automáticamente el protocolo del dispositivo al conectarse; solo necesita apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y establecer el puerto.
- El comportamiento del transporte puede variar según el firmware y las condiciones de red; pruebe tanto UDP como TCP si encuentra problemas de conectividad o pérdida de paquetes.
- Las herramientas de aprovisionamiento del fabricante y las revisiones de firmware pueden presentar pantallas de configuración o sintaxis de comandos diferentes; siga la guía de ThinkRace correspondiente al firmware de su dispositivo.
- Si despliega en escala, documente los pasos de aprovisionamiento que utilizó para mantener consistencia entre múltiples dispositivos e instaladores.
- Confirme cómo se mapean la telemetría de salud y los eventos SOS a los campos de Plaspy si depende de tipos específicos de alerta para sus operaciones.

## Por qué usar Plaspy con esta configuración

Usar el Traxbean ST2 con Plaspy centraliza la ubicación en vivo, las alertas SOS y la telemetría fisiológica en una sola plataforma para que cuidadores y equipos de operaciones puedan monitorear la seguridad del usuario y responder con rapidez. Las capacidades de posicionamiento multimodal y las métricas de salud continuas del ST2, combinadas con la ingestión y el sistema de alertas de Plaspy, ofrecen una vista unificada para despliegues de wearables y rastreo de activos.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com and verify the latest device specific setup methods and firmware details on the ThinkRace website https://www.thinkrace.com/. Manufacturer configuration steps, firmware behavior, and provisioning tools can change over time so always confirm current instructions on the official ThinkRace resources.
