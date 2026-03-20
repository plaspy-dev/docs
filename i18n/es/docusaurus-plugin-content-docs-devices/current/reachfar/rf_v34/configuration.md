---
slug: /reachfar/rf_v34/configuration
id: rf_v34-configuration
sidebar_label: Configuration
title: Reachfar - RF-V34 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Reachfar RF-V34 con Plaspy, ajustes de servidor y flujo de instalación
keywords:
  - Configuración Reachfar RF V34
  - Configuración RF V34
  - Configuración RF V34 Plaspy
  - Ajustes de servidor RF V34
  - Configuración rastreador GPS Reachfar
  - Configuración rastreador para ganado
  - Integración rastreador Plaspy
  - Configuración 2G GPRS
  - Configuración plataforma seguimiento RF V34
  - Configuración dispositivo Reachfar
---

# Reachfar - Configuración RF-V34

Esta página documenta el contexto público de configuración para usar el rastreador Reachfar RF-V34 con la plataforma Plaspy. Resume los ajustes del servidor Plaspy compartidos y describe los pasos prácticos que usted deberá realizar en el lado del fabricante para apuntar sus unidades RF-V34 a Plaspy y así reportar ubicación y telemetría en tiempo real.

Plaspy usa un endpoint y puerto comunes para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para aplicar estos valores pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que use esta guía junto con el manual de Reachfar para los comandos y elementos de interfaz específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara el RF-V34 para transmitir ubicaciones basadas en GPS, WiFi y LBS, así como telemetría del dispositivo, a Plaspy mediante 2G GPRS usando TCP/IP. El objetivo es configurar el dispositivo para que alcance de forma fiable el endpoint de ingestión de Plaspy y luego validar que las posiciones y la telemetría aparezcan en su cuenta Plaspy.

- Configure el destino de red del dispositivo para que el RF-V34 reporte al endpoint de Plaspy.
- Asegúrese de que el RF-V34 tenga conectividad celular válida y que el instalador haya configurado los APN necesarios.
- Seleccione el tipo de transporte si la interfaz del dispositivo lo requiere y guarde la configuración.
- Verifique que el dispositivo aparezca en línea en Plaspy y confirme que la ubicación y la telemetría de batería se estén registrando.
- Supervise los informes de carga solar y batería en Plaspy para planificar mantenimiento y revisiones del collar.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el RF-V34 en la interfaz del fabricante o en la herramienta de configuración por SMS:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; elija la opción que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto para la ingestión de datos

## Requisitos típicos antes de la configuración

- RF-V34 alimentado y con carga, con cable USB magnético disponible para carga o configuración inicial
- Tarjeta SIM 2G válida instalada y activa, con datos habilitados si su región lo requiere
- Cobertura de red móvil 2G GPRS en la ubicación de despliegue
- Acceso al método oficial de configuración Reachfar, como la interfaz web del proveedor, la app o la lista de comandos SMS
- Registro del IMEI o identificador único del dispositivo para confirmar el equipo en Plaspy tras la configuración
- Cuenta Plaspy o credenciales de despliegue disponibles para comprobar la visibilidad del equipo después de configurar

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el RF-V34 transmite paquetes de posición y telemetría por 2G GPRS usando TCP/IP al endpoint y puerto del servidor Plaspy. Plaspy ingiere esos paquetes, detecta automáticamente el protocolo del dispositivo y pone a disposición en la plataforma los datos de ubicación, batería y eventos.

- El dispositivo se configura para reportar a d.plaspy.com o 54.85.159.138 y usar el puerto 8888 para la subida de datos
- El transporte puede seleccionarse como UDP o TCP en el RF-V34 cuando la herramienta de configuración lo requiera
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint funcionan para los dispositivos soportados
- Posiciones, estado de batería y carga solar, y eventos de movimiento son visibles en Plaspy tras un reporte exitoso
- Los intervalos regulares de reporte y los informes activados por movimiento son procesados por Plaspy para análisis en tiempo real e históricos

## Flujo común de configuración

1. Acceda al método oficial de configuración Reachfar o al software proporcionado por el proveedor, como la interfaz web del dispositivo, la app del proveedor o los comandos SMS documentados.
2. Ubique los ajustes de servidor o centro de datos e ingrese el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 como puerto de destino para las cargas de datos.
4. Seleccione UDP o TCP como transporte si el dispositivo exige una selección explícita.
5. Configure los parámetros APN o relacionados con la SIM según su operador móvil y guarde los cambios.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el manual del equipo lo indican.
7. Valide que el RF-V34 reporte a Plaspy comprobando el estado del dispositivo y las posiciones entrantes en su cuenta o consola de despliegue Plaspy.

## Ejemplos de comandos de configuración

El fabricante del RF-V34 puede proporcionar comandos SMS o una app de configuración para establecer servidor, puerto y transporte. Los comandos exactos varían según firmware y herramienta del proveedor, por lo que consulte el manual de Reachfar o la lista de comandos del proveedor para la sintaxis precisa. En general, deberá suministrar los valores del servidor Plaspy mostrados arriba cuando el dispositivo solicite dominio o IP del servidor, puerto y tipo de transporte.

Debido a que los métodos de configuración del RF-V34 difieren entre versiones de firmware y variantes regionales, esta página no incluye un conjunto único y universal de comandos. Remítase a la guía de comandos de Reachfar para los comandos SMS o de herramienta específicos del dispositivo.

## Observaciones de configuración

- El firmware importa: los nombres de comandos y menús pueden variar según el nivel de firmware o la tanda de producción del RF-V34, por lo que confirme la versión de firmware antes de aplicar los pasos.
- TCP versus UDP: elija el tipo de transporte requerido por su herramienta de aprovisionamiento; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Los detalles de APN y SIM suelen ser necesarios para datos 2G GPRS; configure los valores APN según el operador móvil de su región.
- Los modos de ahorro de energía y los intervalos de reporte afectan la frecuencia con que el dispositivo sube datos a d.plaspy.com en el puerto 8888; ajústelos según las necesidades de rastreo y la vida útil de la batería.
- Confirme el IMEI y los detalles de registro del dispositivo para poder asociar el RF-V34 al registro de activo correcto en Plaspy después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el Reachfar RF-V34 con Plaspy ofrece una vía sencilla para integrar el seguimiento de larga duración de ganado y la telemetría en una sola plataforma. Plaspy ingiere el flujo de datos del RF-V34 y presenta información de ubicación, batería y eventos para monitorear el hato, responder a eventos de geocercas y analizar patrones de movimiento históricos.

Para obtener más información sobre Plaspy y cómo procesa los datos de los dispositivos visite https://www.plaspy.com. Para los comandos de configuración más recientes del Reachfar RF-V34, detalles de firmware e instrucciones específicas del dispositivo, verifique la información en el sitio del fabricante https://www.reachfargps.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
