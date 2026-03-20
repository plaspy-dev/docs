---
slug: /navtelekom/signal_s_2651/configuration
id: signal_s_2651-configuration
sidebar_label: Configuration
title: Navtelekom - SIGNAL S-2651 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración para integrar el rastreador Navtelekom SIGNAL S-2651 con Plaspy usando servidor compartido y detección de protocolo
keywords:
  - Configuración Navtelekom SIGNAL S-2651
  - Instalación Navtelekom SIGNAL S-2651
  - SIGNAL S-2651 Plaspy
  - Configuración de rastreador GPS Navtelekom
  - Configuración de servidor SIGNAL S-2651
  - Integración SIGNAL S-2651
  - Configuración de telemetría SIGNAL S-2651
  - Guía de instalación del rastreador Navtelekom
  - Rastreo de vehículos SIGNAL S-2651
  - Configuración de rastreador Plaspy
---

# Navtelekom - Configuración del SIGNAL S-2651

Esta página ofrece orientación pública para configurar el rastreador GPS Navtelekom SIGNAL S-2651 con la plataforma Plaspy. Se centra en los pasos prácticos no propietarios necesarios para apuntar el dispositivo a Plaspy, validar la conectividad y comprender los ajustes de servidor compartido que Plaspy espera.

Plaspy utiliza ajustes de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que utilice el proveedor. La información que sigue se basa en la descripción pública del SIGNAL S-2651 y en los detalles del servidor Plaspy, y está pensada para ayudar a instaladores técnicos y administradores de flota a preparar el dispositivo para la integración.

## Resumen de la configuración

Configurar el SIGNAL S-2651 para Plaspy prepara el equipo para enviar ubicación, eventos de E/S y telemetría a la plataforma Plaspy, de modo que los activos sean visibles y gestionables en tiempo real. Los objetivos prácticos del proceso de configuración son los siguientes:

- Apuntar el rastreador al endpoint del servidor Plaspy para que entregue datos de posición y eventos a la plataforma.
- Verificar que el dispositivo tenga conectividad celular válida y los ajustes de APN o datos correctos para la SIM instalada.
- Seleccionar el protocolo de transporte si el equipo lo requiere y configurar el puerto 8888, tal como exige Plaspy.
- Validar que el rastreador informe y sea visible en Plaspy después de aplicar los ajustes.
- Confirmar el comportamiento de registro en fallback y almacenamiento local, como la tarjeta SD, para preservar la continuidad de los datos durante cortes de cobertura.

## Ajustes del servidor Plaspy

Al configurar el SIGNAL S-2651 para Plaspy, use los siguientes ajustes públicos de conexión de Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará el protocolo del dispositivo una vez que este apunte al endpoint compartido

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y admite tanto UDP como TCP en ese puerto.

## Requisitos típicos antes de la instalación

- Acceso físico al SIGNAL S-2651 durante la configuración inicial o un instalador que pueda hacer la puesta a punto in situ.
- Dispositivo cargado o con alimentación del vehículo conectada y la batería de respaldo interna presente si es necesario.
- Servicio celular 2G activo y al menos una tarjeta SIM funcional instalada en el equipo; confirme el APN y las credenciales de datos con el operador de la SIM.
- Acceso a las herramientas oficiales de configuración de Navtelekom, como NTC Configurator, o herramientas locales por Bluetooth para el S-2651.
- Un equipo informático o dispositivo móvil capaz de ejecutar la utilidad de configuración del fabricante o un terminal Bluetooth si se usa esa vía.
- Una tarjeta SD insertada para registro local si requiere retención de datos fuera de línea y para validar el comportamiento de registro en SD.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado para Plaspy, el SIGNAL S-2651 envía datos de posición y telemetría vía celular al endpoint y puerto compartido de Plaspy. Plaspy recibe estos mensajes y usa su detección automática de protocolo para interpretar el formato del dispositivo y mostrar los datos en la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- Elija UDP o TCP en el dispositivo si el firmware requiere seleccionar el transporte; Plaspy acepta ambos.
- El rastreador envía actualizaciones periódicas de posición, mensajes de E/S y eventos, y telemetría de sensores CAN o 1-Wire para su consumo en Plaspy.
- Si se pierde la cobertura de red, el registro local en la tarjeta SD almacena trayectos y eventos recientes para su envío cuando se restaure la conectividad.
- Plaspy utiliza el flujo entrante para ofrecer visibilidad en tiempo real, alertas y el historial de ubicación para la supervisión de flotas y activos.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial del fabricante, como NTC Configurator, o a la interfaz de configuración por Bluetooth del dispositivo.
2. Verifique que el equipo tenga una SIM operativa y confirme el APN o perfil de datos según lo requiera su operador móvil.
3. Introduzca el host del servidor Plaspy, ya sea d.plaspy.com o la dirección IP 54.85.159.138 en el campo servidor/host.
4. Ajuste el puerto a 8888, ya que Plaspy usa ese puerto para todos los dispositivos compatibles.
5. Si el dispositivo solicita selección de transporte, elija UDP o TCP según la fiabilidad de la red y la preferencia del instalador.
6. Aplique o guarde la configuración con la herramienta del fabricante y, si el dispositivo lo solicita, reinícielo para aplicar los cambios.
7. Valide que el dispositivo informe a Plaspy comprobando los mensajes entrantes en la plataforma y confirmando que aparecen las actualizaciones de posición.

## Ejemplos de comandos de configuración

El contenido público de configuración del modelo SIGNAL S-2651 no incluye cadenas de comando específicas para enviar por SMS o serie. Los dispositivos Navtelekom se suelen configurar mediante la aplicación NTC Configurator o por Bluetooth para la puesta a punto en sitio, y la plataforma DRC se emplea para la gestión de firmware. Dado que los comandos y los nombres de campo en la GUI varían según la versión de firmware y la herramienta del proveedor, siga el procedimiento documentado del fabricante en NTC Configurator o el flujo de configuración por Bluetooth proporcionado por Navtelekom.

Si prefiere un método por comandos que su herramienta de instalador exponga, consulte la documentación oficial de Navtelekom o la función de exportar configuración de NTC Configurator para obtener las entradas exactas de host y puerto que debe aplicar.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los nombres de campo y los flujos de configuración en las herramientas del fabricante; confirme que los campos en NTC Configurator coincidan con los valores de servidor y puerto indicados arriba.
- Use TCP o UDP según sus necesidades de fiabilidad de red; UDP puede ser más liviano mientras que TCP ofrece fiabilidad a nivel de conexión. Plaspy acepta ambos en el puerto 8888.
- El comportamiento de doble SIM depende del dispositivo; confirme cómo el S-2651 selecciona las SIM y asegúrese de que la SIM activa tenga un APN válido para datos.
- El registro en tarjeta SD proporciona continuidad fuera de línea; verifique la retención y el comportamiento de subida tras restaurar la conectividad en sus pruebas de despliegue.
- Bluetooth 4.0 puede usarse para la configuración local en sitio cuando esté disponible y simplifica la puesta en marcha inicial sin conectar un PC.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom SIGNAL S-2651 con Plaspy ofrece visibilidad consistente a nivel de plataforma para flotas y activos que requieren reportes de posición fiables, monitorización de eventos y ingestión de telemetría. Las características del hardware S-2651, como GNSS multiconstelación, conectividad 2G con doble SIM, interfaces CAN y 1-Wire, y registro en tarjeta SD, encajan bien con los flujos de trabajo de Plaspy para seguimiento en tiempo real, alertas basadas en sensores y análisis histórico.

Para saber más sobre Plaspy y cómo se integra con rastreadores compatibles visite https://www.plaspy.com. Verifique los métodos de configuración específicos por dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante en https://www.navtelecom.ru/ ya que los procedimientos y el firmware pueden cambiar con el tiempo.
