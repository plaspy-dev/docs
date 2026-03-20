---
slug: /neomatica/adm007_ble_cl/configuration
id: adm007_ble_cl-configuration
sidebar_label: Configuration
title: Neomatica - ADM007 BLE CL Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Neomatica ADM007 BLE CL con ajustes de servidor Plaspy y lista de verificación
keywords:
  - neomatica adm007 ble cl
  - adm007 ble cl configuración
  - configuración de rastreador neomatica
  - configuración plaspy para rastreadores
  - configuración de rastreador gps
  - configuración de seguimiento de vehículos
  - configuración de servidor adm007
  - rastreador con sensores ble
  - configuración gprs para rastreadores
  - configuración gps neomatica
---

# Neomatica - Configuración del ADM007 BLE CL

Esta página documenta el contexto público de configuración para usar el rastreador de coche Neomatica ADM007 BLE CL con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor y en el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda comunicarse y aparecer en su cuenta de Plaspy. Aquí se toma en cuenta la descripción del dispositivo, incluyendo la instalación en la toma de corriente, el soporte para sensores Bluetooth y el consumo de datos típico.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, el lote de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía ofrece los ajustes públicos comunes y el flujo de trabajo general, mientras usted verifica menús o comandos específicos con la documentación de Neomatica o las herramientas del vendedor.

## Resumen de la configuración

El objetivo de este proceso es preparar el ADM007 BLE CL para enviar ubicación y eventos del equipo a Plaspy, de manera que los vehículos y sensores sean visibles en la plataforma. Los pasos son intencionalmente generales para ajustarse a los métodos habituales de configuración del fabricante, y se enfocan en los valores de servidor de Plaspy que deben aplicarse.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy para que el tráfico llegue a la plataforma
- Seleccione el protocolo de transporte disponible en la interfaz del dispositivo y guarde la configuración
- Asegúrese de que la unidad tenga conectividad celular y una SIM activa si utiliza reportes vía GPRS
- Empareje y verifique los sensores BLE si piensa recopilar datos adicionales
- Aplique los ajustes y reinicie el rastreador si es necesario para establecer la conexión activa
- Valide que el rastreador aparezca y reporte correctamente dentro de Plaspy

## Ajustes del servidor Plaspy

Al configurar el ADM007 BLE CL para Plaspy utilice estos ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com para identificar el endpoint de Plaspy
- IP del servidor 54.85.159.138 como endpoint alternativo para configuraciones basadas en IP directa
- Puerto 8888 que Plaspy utiliza para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP según la opción de configuración que ofrezca el dispositivo
- Detección automática de protocolo en Plaspy, de manera que la plataforma identifique el protocolo del rastreador una vez establecida la conexión

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte a la dirección y puerto indicados arriba.

## Requisitos típicos antes de la configuración

- Un ADM007 BLE CL alimentado e instalado en la toma de corriente del vehículo o en otra fuente de 12 V adecuada
- Una NanoSIM con servicio de datos activo y GPRS habilitado cuando se utilice reporte celular
- Acceso al método oficial de configuración de Neomatica, como la app móvil por Bluetooth, comandos SMS o el software de configuración del proveedor
- El dispositivo encendido y accesible por Bluetooth o SMS para la configuración inicial y verificación
- Sensores BLE listos para emparejar con los identificadores o códigos de configuración requeridos si va a usar sensores inalámbricos
- Visibilidad básica de red para confirmar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888

## Cómo se conecta este rastreador a Plaspy

El ADM007 BLE CL normalmente utiliza su conexión celular GPRS para enviar posiciones y eventos del equipo al endpoint y puerto del servidor configurado. Una vez que el dispositivo esté configurado para enviar datos a Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y mostrará el equipo en la vista de flota.

- El rastreador envía actualizaciones periódicas de posición y mensajes de evento por GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Puede seleccionar UDP o TCP como método de transporte si el dispositivo exige elegir uno
- Los sensores BLE se emparejan localmente y sus datos son reenviados por el rastreador a Plaspy como parte de los reportes del dispositivo
- Plaspy detecta automáticamente el protocolo entrante, por lo que no se requiere seleccionar el protocolo manualmente en la plataforma
- Una vez que comiencen los reportes, la visibilidad de ubicación y los registros de eventos del equipo estarán disponibles en Plaspy para la monitorización operativa

## Flujo común de configuración

1. Acceda al método de configuración oficial de Neomatica, como la app móvil por Bluetooth, el conjunto de comandos SMS o la herramienta de escritorio que le proporcione su distribuidor
2. En los ajustes de servidor del dispositivo ingrese d.plaspy.com o, si lo prefiere, la IP del servidor 54.85.159.138
3. Establezca el puerto del servidor en 8888, que es el puerto que Plaspy usa para todos los dispositivos
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según la preferencia del instalador o la guía del dispositivo
5. Aplique o guarde la configuración usando la herramienta o el método de comandos del fabricante
6. Reinicie el dispositivo si el método de configuración o las instrucciones del fabricante indican que es necesario para aplicar los cambios de red
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma y confirmando las actualizaciones periódicas

## Ejemplos de comandos de configuración

El ADM007 BLE CL puede configurarse mediante los métodos soportados por el fabricante, como apps de configuración por Bluetooth, comandos SMS o una utilidad de configuración del proveedor. Los comandos y menús exactos pueden diferir según el firmware y la herramienta. Consulte la documentación de Neomatica o a su proveedor para la sintaxis de comandos específica de su versión de firmware y herramienta de configuración.

Si utiliza configuración basada en SMS o una interfaz de línea de comandos proporcionada por Neomatica, siga los ejemplos oficiales de comandos en la documentación de Neomatica. Esta página no inventa ni reproduce sintaxis de comandos SMS que puedan variar entre versiones de firmware.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las etiquetas de menú, las opciones de transporte disponibles y la sintaxis exacta de comandos, así que confirme los comandos según el firmware instalado
- Los transportes TCP y UDP se comportan de forma distinta en redes con pérdida; elija el transporte conforme al manual del dispositivo y sus prioridades operativas
- Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles y detecta automáticamente los protocolos de los rastreadores, por lo que los valores de servidor y puerto son consistentes en las implementaciones
- El emparejamiento de sensores BLE se realiza localmente entre los sensores y el ADM007 BLE CL y puede requerir pasos específicos en la app de Neomatica
- El ADM007 BLE CL está diseñado para bajo consumo de datos con un uso mensual típico alrededor de 8 a 10 MB, dependiendo de la frecuencia de reporte y el tráfico de sensores

## Por qué usar Plaspy con esta configuración

Usar el ADM007 BLE CL con Plaspy ofrece un camino directo para integrar rastreadores compactos alimentados en la toma de corriente y datos de sensores BLE en una plataforma unificada de monitoreo de flota. Los ajustes compartidos de servidor de Plaspy simplifican el despliegue en múltiples dispositivos, ya que todos usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando comienzan los reportes.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y para los detalles más recientes de productos y firmware de Neomatica consulte https://neomatica.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que es importante verificar las instrucciones específicas del dispositivo en el sitio oficial de Neomatica.
