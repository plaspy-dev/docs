---
slug: /gotop/g30b/configuration
id: g30b-configuration
sidebar_label: Configuration
title: GOTOP - G30B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GOTOP G30B con los ajustes de servidor de Plaspy y el flujo de instalación para seguimiento fiable
keywords:
  - Configuración GOTOP G30B
  - Instalación GOTOP G30B
  - Configuración G30B Plaspy
  - Ajustes servidor rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración rastreo de activos
  - Instalación rastreador con imán
  - GPS larga duración en espera
  - Configuración servidor Plaspy
  - Detección protocolo de rastreador
---

# GOTOP - G30B: Configuración

Esta página describe el contexto público de configuración para usar el rastreador Longtime GOTOP G30B con Plaspy. Se centra en los ajustes prácticos del servidor y en los pasos generales necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador entregue datos de ubicación y eventos a la plataforma para monitoreo en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a nivel de plataforma. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con el manual del dispositivo y los recursos oficiales de GOTOP.

## Resumen de configuración

El objetivo al configurar el G30B para Plaspy es preparar el rastreador para que se comunique de forma fiable con el punto de ingestión de Plaspy, validar la conectividad y habilitar la visibilidad en la plataforma. El proceso suele ser sencillo: indicar la dirección del servidor, confirmar los ajustes de transporte, guardar la configuración del equipo y verificar que la telemetría aparezca en Plaspy.

- Apunte el G30B al endpoint del servidor Plaspy para que los paquetes de ubicación y estado lleguen a la plataforma.
- Seleccione el transporte requerido (UDP o TCP) si la configuración del dispositivo solicita una elección.
- Configure el equipo para usar el puerto compartido de Plaspy para que la plataforma reciba todo el tráfico de forma consistente.
- Guarde y aplique la configuración en el dispositivo mediante el método oficial del fabricante.
- Valide el reporte exitoso confirmando que el rastreador aparece en Plaspy y envía las actualizaciones de posición y alarmas esperadas.

## Ajustes del servidor Plaspy

Configure el dispositivo para que reporte al servidor Plaspy con estos ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP según la capacidad del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda parsear la telemetría independientemente de la variante del protocolo

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y facilita estandarizar despliegues.

## Requisitos previos a la configuración

- Una unidad G30B con carga de batería suficiente para la configuración y el reporte inicial.
- Una Micro SIM activa con plan de datos y cobertura de red adecuada para su región de despliegue.
- Acceso al método de configuración oficial de GOTOP o al software del fabricante, como la interfaz UART del dispositivo, la herramienta del proveedor o la utilidad de configuración aprobada.
- Documentación de firmware o manual de usuario para localizar los ajustes de servidor y transporte.
- Medio para reiniciar o ciclar la energía del dispositivo después de aplicar los cambios de configuración.
- Acceso de red para verificación, por ejemplo un dispositivo que pueda alcanzar Internet público para conectarse a d.plaspy.com

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G30B reporta ubicación y estado al endpoint de ingestión de Plaspy para que la plataforma pueda mostrar posiciones, activar alertas y registrar el historial. El rastreador envía paquetes de telemetría periódicos al servidor y puerto compartidos configurados en el dispositivo.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy indicados más arriba.
- Las actualizaciones de ubicación y las fijaciones híbridas GNSS más LBS se transmiten a Plaspy para visualización en mapa y reproducción histórica.
- Eventos de seguridad como alarmas por manipulación o desmontaje se reenvían a Plaspy como notificaciones de evento.
- El nivel de batería y el estado del dispositivo se incluyen en la telemetría para que Plaspy soporte planificación de mantenimiento y alertas.
- Plaspy recibe telemetría por UDP o TCP y detecta automáticamente el protocolo del equipo para decodificar los paquetes.

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de GOTOP recomendado por el fabricante, por ejemplo la interfaz UART o la utilidad de configuración del proveedor.
2. Ubique la sección de ajustes del servidor y escriba el dominio d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido usado por todos los dispositivos Plaspy.
4. Elija UDP o TCP si el equipo requiere seleccionar el transporte, según su preferencia y la red.
5. Aplique o guarde los cambios en la herramienta del dispositivo o desde la interfaz del mismo.
6. Reinicie o ciclée la alimentación del dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporta a Plaspy verificando la llegada de telemetría y la presencia del equipo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El G30B admite configuración mediante los métodos y herramientas que provee el fabricante. Los comandos exactos o las cadenas SMS varían según el firmware y la herramienta del proveedor y no se incluyen aquí como comandos genéricos. Use la utilidad de configuración oficial de GOTOP o el manual del dispositivo para aplicar el dominio o la IP del servidor, establecer el puerto 8888 y seleccionar UDP o TCP según corresponda. Si su unidad admite configuración serial o UART, siga las instrucciones del proveedor para enviar los ajustes de servidor y transporte por esa interfaz.

Si dispone de comandos SMS o estilo AT suministrados por GOTOP, aplíquelos en el orden que documente el fabricante y conserve los marcadores de posición como los valores APN cuando sea necesario.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles; verifique los nombres exactos de los parámetros en el manual del dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y el desempeño del operador en su área de despliegue; Plaspy acepta cualquiera de los dos y detecta el protocolo automáticamente.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, estandarizar el puerto simplifica despliegues a gran escala y la resolución de problemas.
- Si configura vía UART, asegúrese de respetar los tiempos y ajustes seriales que documente GOTOP.
- Después de la configuración, confirme que el dispositivo envía actualizaciones regulares de posición y las alarmas esperadas a Plaspy antes de la instalación definitiva.

## Por qué usar Plaspy con esta configuración

Usar el G30B con Plaspy ofrece a las organizaciones una forma sencilla de combinar hardware de seguimiento discreto y de larga espera con una plataforma centralizada para visibilidad y gestión de eventos. Los ajustes de servidor compartidos y la detección automática de protocolos en Plaspy reducen la complejidad de configuración y aceleran los despliegues en flotas de dispositivos.

Learn more about Plaspy and how it manages device telemetry at https://www.plaspy.com. For the most current device specific setup commands, firmware behavior, and manufacturer instructions, verify details with GOTOP at https://www.gotop.cc/ as manufacturer specifications and setup methods can change over time.
