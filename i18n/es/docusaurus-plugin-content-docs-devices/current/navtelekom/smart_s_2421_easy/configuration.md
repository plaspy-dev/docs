---
slug: /navtelekom/smart_s_2421_easy/configuration
id: smart_s_2421_easy-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2421 EASY+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar Navtelekom SMART S-2421 EASY+ a Plaspy con ajustes de servidor y pasos de configuración prácticos
keywords:
  - Configuración Navtelekom SMART S-2421 EASY+
  - Configuración rastreador GPS Navtelekom
  - SMART S-2421 EASY+ Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreo de vehículos
  - Configuración de servidor para rastreador GPS
  - Configuración de rastreador para gestión de flotas
  - Guía de configuración NTC Configurator
  - Configuración de telemetría GNSS
  - Conexión del rastreador a Plaspy
---

# Navtelekom - Configuración del SMART S-2421 EASY+

Esta página describe el contexto de configuración pública para usar el rastreador Navtelekom SMART S-2421 EASY+ con Plaspy. Se concentra en los ajustes de servidor prácticos, las comprobaciones previas y el flujo de trabajo típico necesario para apuntar el dispositivo a Plaspy y que la ubicación y la telemetría en tiempo real sean visibles en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al servicio. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor como NTC Configurator, por lo que debe seguir esta guía junto con los recursos oficiales de Navtelekom.

## Resumen de la configuración

Este proceso prepara el SMART S-2421 EASY+ para comunicarse con Plaspy estableciendo el endpoint del servidor, seleccionando el transporte y validando el reporte para que el dispositivo aparezca en la plataforma y envíe datos de ubicación y telemetría de forma fiable.

- Apunte el rastreador al dominio o IP del servidor de Plaspy para que los paquetes salientes lleguen a la plataforma.  
- Use el puerto compartido de Plaspy para que la plataforma acepte mensajes de este y otros dispositivos compatibles.  
- Seleccione UDP o TCP en el rastreador cuando el dispositivo requiera elección de transporte.  
- Guarde y aplique los ajustes con el NTC Configurator del fabricante o el método de configuración aprobado.  
- Valide la visibilidad en Plaspy confirmando que el dispositivo reporte ubicación GNSS y telemetría.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte UDP o TCP según las opciones del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al servidor  
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el rastreador debe configurarse para usar el puerto 8888

## Requisitos típicos antes de configurar

- Una unidad SMART S-2421 EASY+ con alimentación conectada y lista para configuración.  
- Una tarjeta SIM 2G operativa instalada y con datos habilitados en la región objetivo si el módem del rastreador lo requiere.  
- Acceso al método de configuración del fabricante, como la utilidad NTC Configurator o el manual oficial de configuración.  
- Verificación básica del cableado y la alimentación para asegurar que el dispositivo arranca y se registra en la red móvil.  
- Acceso a credenciales de cuenta Plaspy y un flujo de gestión para confirmar que el dispositivo aparece en la vista de flota después de la configuración.  
- Documentación del fabricante y notas de firmware disponibles para comprobaciones de compatibilidad y registros de cambios.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el SMART S-2421 EASY+ envía ubicación GNSS y telemetría al endpoint del servidor de Plaspy. Plaspy procesa esos mensajes, aplica detección de protocolo y pone los datos del dispositivo a disposición para seguimiento en vivo, historial, alertas e integraciones.

- El rastreador debe apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para el reporte saliente.  
- Las configuraciones de transporte en el dispositivo pueden establecerse en UDP o TCP según la opción del equipo; Plaspy acepta ambos.  
- Plaspy detecta automáticamente el protocolo del rastreador para parsear los datos entrantes correctamente.  
- Ubicación, eventos del acelerómetro y entradas de sensores se envían a Plaspy para su visualización y para reglas operativas.  
- Una vez que el dispositivo reporta, los gestores de flota pueden validar posiciones en vivo y crear alertas o informes en Plaspy.

## Flujo de trabajo común de configuración

1. Obtenga el SMART S-2421 EASY+ y confirme que está alimentado y con conectividad de red.  
2. Abra la herramienta oficial de configuración del fabricante como NTC Configurator o utilice el método de configuración documentado.  
3. Ingrese la dirección del servidor de Plaspy especificando d.plaspy.com o la IP del servidor 54.85.159.138.  
4. Configure el puerto en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.  
5. Elija el protocolo de transporte UDP o TCP si el rastreador requiere una selección explícita.  
6. Aplique o guarde la configuración mediante la herramienta del fabricante y, si es necesario, reinicie el dispositivo para aplicar los cambios.  
7. Valide que el rastreador reporte a Plaspy comprobando la conectividad del dispositivo y la ubicación en vivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El SMART S-2421 EASY+ se configura típicamente usando la utilidad NTC Configurator suministrada por el fabricante o un método equivalente descrito en el Passport del dispositivo. Las cadenas de comandos exactas y los formatos SMS de configuración varían según el firmware y la versión de la utilidad NTC. Siga el flujo de trabajo del NTC Configurator para establecer el dominio o la IP del servidor y el puerto, luego guarde y reinicie el dispositivo según sea necesario.

Si prefiere métodos por línea de comandos o SMS y dispone de comandos provistos por el fabricante en el Passport, aplique esos comandos exactamente en el orden documentado por Navtelekom. Debido a que los formatos SMS y de comandos cambian según el firmware, consulte el manual oficial del dispositivo para la sintaxis exacta antes de enviar comandos.

## Notas de configuración

- Las diferencias de firmware pueden modificar los campos de configuración disponibles y el flujo exacto en NTC Configurator. Verifique siempre las notas de firmware antes de realizar cambios masivos.  
- TCP y UDP funcionan con Plaspy; elija el transporte que se ajuste a sus prácticas de instalación o a las restricciones de red.  
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, el ajuste de puerto del equipo debe ser 8888 para asegurar la llegada correcta a d.plaspy.com o 54.85.159.138.  
- Utilice el Passport del fabricante y los PDFs de ejemplo de cableado para confirmar conexiones físicas, uso de I/O y comportamiento de la batería.  
- Si depende de la configuración por SMS, verifique el conjunto de comandos SMS en el manual oficial ya que la sintaxis y los marcadores pueden variar.

## Por qué usar Plaspy con esta configuración

Configurar el SMART S-2421 EASY+ para reportar a Plaspy ofrece a los operadores de flota una vía directa hacia la ubicación en tiempo real, el historial de rutas y alertas basadas en telemetría. La detección automática de protocolos de Plaspy reduce la complejidad de configuración en la plataforma, permitiéndole centrarse en la instalación de los dispositivos, la verificación de la conectividad y la creación de reglas operativas.

Para obtener más información sobre Plaspy y cómo gestiona la telemetría de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración específicos más actuales, el comportamiento de firmware y los detalles del fabricante, verifique la documentación oficial de Navtelekom en https://www.navtelecom.ru/
