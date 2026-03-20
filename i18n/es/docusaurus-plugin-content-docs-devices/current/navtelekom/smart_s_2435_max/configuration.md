---
slug: /navtelekom/smart_s_2435_max/configuration
id: smart_s_2435_max-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2435 MAX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Navtelekom SMART S-2435 MAX con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - Configuración Navtelekom SMART S-2435 MAX
  - Configuración SMART S-2435 MAX
  - Rastreador Navtelekom Plaspy
  - Configuración de rastreador Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de rastreador de vehículo
  - Configuración de seguimiento de flotas
  - Configuración Plaspy SMART S-2435 MAX
  - Configuración de rastreador GPS Navtelekom
  - Configuración del servidor de rastreador
---

# Navtelekom - SMART S-2435 MAX Configuración

Esta página documenta el contexto público de configuración para usar el Navtelekom SMART S-2435 MAX con Plaspy. Resume los valores de servidor prácticos y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, tomando como base las capacidades del equipo: posicionamiento GLONASS/GPS, módem dual SIM 2G con antena GSM interna, antena GNSS/GPS interna, batería de respaldo y múltiples opciones de E/S para integración de telemetría.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para conocer los valores de servidor necesarios en Plaspy y la secuencia típica de acciones; confirme siempre los comandos específicos del dispositivo y el comportamiento del firmware con la documentación oficial de Navtelekom.

## Resumen de la configuración

Este proceso prepara el SMART S-2435 MAX para enviar posiciones GNSS y telemetría a la plataforma Plaspy y valida que el dispositivo aparezca y reporte correctamente en el sistema.

- Configure el rastreador para que reporte al endpoint de servidor de Plaspy y así los datos sean recibidos en tiempo real.
- Seleccione el transporte (UDP o TCP) y asegúrese de que el dispositivo use el puerto compartido de Plaspy para que la plataforma acepte las conexiones entrantes.
- Guarde y aplique la configuración del dispositivo usando la herramienta oficial de Navtelekom o métodos locales compatibles.
- Reinicie o haga un ciclo de energía del equipo si es necesario, luego valide la conectividad y el reporte en Plaspy.
- Verifique que los canales de telemetría, como entradas universales, salidas y sensores Bluetooth, estén habilitados y sean visibles en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP según la selección del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un SMART S-2435 MAX alimentado y accesible, instalado o conectado temporalmente para la configuración.
- Tarjeta(s) SIM activa(s) insertada(s) si va a usar el enlace celular; compruebe la cobertura GSM para servicio 2G en su zona.
- Acceso al método de configuración oficial de Navtelekom o al software del fabricante, como el configurador oficial u otras herramientas locales soportadas.
- Un PC, smartphone o herramienta Bluetooth si la parametrización local requiere configuración por Bluetooth.
- Conocimiento de la versión de firmware del dispositivo y de cualquier guía específica del proveedor aplicable a su revisión de hardware.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2435 MAX transmite posiciones GNSS y telemetría vía su enlace celular al endpoint y puerto del servidor Plaspy. Una vez dirigido a Plaspy, la plataforma actualiza ubicaciones de vehículos, procesa entradas de telemetría y almacena el historial para reportes y alertas.

- Actualizaciones de posición GNSS en tiempo real e historial de rutas transmitidos al endpoint de Plaspy (d.plaspy.com / 54.85.159.138) en el puerto 8888.
- Reportes de telemetría y eventos desde entradas universales e interfaces CAN/serial que se reenvían a Plaspy para monitoreo y procesamiento de reglas.
- Eventos de control de salidas y acciones remotas reflejadas en los flujos de trabajo de Plaspy cuando son activadas por reglas de la plataforma.
- Conectividad Bluetooth local para parametrización en sitio y lectura de sensores de corto alcance, con la telemetría resultante enviada a Plaspy a través del enlace celular del dispositivo.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que el rastreador puede usar la configuración estándar de puertos de Plaspy sin diferenciación personalizada del servidor.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Navtelekom (por ejemplo, el configurador del fabricante u otra herramienta de parametrización aprobada).
2. Asegúrese de que las tarjetas SIM estén instaladas y que el dispositivo tenga alimentación y señal celular para conectividad 2G GSM.
3. Ingrese la dirección del servidor Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor/host del dispositivo.
4. Ajuste el puerto del dispositivo a 8888 y, si el equipo lo exige, seleccione UDP o TCP como transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y cárguela al dispositivo.
6. Reinicie o haga un ciclo de energía del SMART S-2435 MAX si el firmware requiere un reinicio para aplicar los parámetros de red.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad del equipo y las posiciones entrantes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos exactos de configuración y el método para enviarlos dependen del configurador Navtelekom o del firmware del equipo. Algunos instaladores utilizan un configurador con interfaz gráfica, otros emplean herramientas locales por Bluetooth/serial o cadenas SMS cuando están soportadas. Al usar la herramienta del fabricante, ingrese los valores del servidor Plaspy tal como se muestran a continuación en los campos correspondientes de host y puerto:

- Host del servidor: d.plaspy.com o 54.85.159.138
- Puerto del servidor: 8888
- Transporte: UDP o TCP

Debido a que los comandos varían según el firmware y la herramienta del fabricante, consulte la documentación del configurador Navtelekom para la sintaxis precisa de los comandos y el procedimiento de carga para su dispositivo. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo comience a reportar al endpoint y puerto configurados.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres exactos de los parámetros, los transportes disponibles o la disposición de la interfaz en la herramienta del fabricante; confirme siempre los parámetros para su versión de firmware.
- Elija UDP o TCP según su instalación y las indicaciones del configurador Navtelekom; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y realiza la detección de protocolo automáticamente.
- Todos los dispositivos Plaspy usan el mismo puerto de escucha, por lo que no necesita puertos únicos por dispositivo; utilice 8888 como puerto estándar.
- El dispositivo soporta configuración local por Bluetooth para parametrización en sitio; siga los pasos de configuración Bluetooth de Navtelekom cuando estén disponibles.
- Verifique la SIM y la conectividad celular antes de finalizar la configuración para evitar falsos negativos al validar el reporte en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2435 MAX con Plaspy ofrece una vía eficiente para integrar la telemetría de vehículos y activos en una plataforma centralizada para mapas en vivo, historial de rutas y alertas basadas en eventos. El módem dual SIM 2G del equipo, sus múltiples opciones de E/S y la capacidad de parametrización por Bluetooth lo hacen apropiado para monitoreo de flotas, flujos antirobo y mantenimiento basado en telemetría cuando se conecta a Plaspy.

Conozca más sobre Plaspy y cómo puede visualizar y gestionar los datos de sus dispositivos en el sitio web de Plaspy https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente de configuración y las notas de firmware con el fabricante en https://www.navtelecom.ru/.
