---
slug: /gosafe/can_9600/configuration
id: can_9600-configuration
sidebar_label: Configuration
title: Gosafe - CAN-9600 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar la interfaz FMS Gosafe CAN-9600 a Plaspy con ajustes de servidor compartido y pasos prácticos
keywords:
  - configuración Gosafe CAN-9600
  - instalación Gosafe CAN-9600
  - configuración servidor CAN-9600
  - interfaz FMS Gosafe
  - integración RS232 seguimiento
  - configuración dispositivo Plaspy
  - seguimiento FMS vehicular
  - integración datos FMS camión
  - compatibilidad rastreador Gosafe
  - configuración plataforma GPS
---

# Gosafe - Configuración CAN-9600

Esta página documenta el contexto público de configuración para usar el Gosafe CAN-9600 con la plataforma Plaspy. El CAN-9600 es una interfaz FMS diseñada para leer datos del bus CAN del vehículo usando los protocolos estándar SAE J1939 y SAE J1708 y reenviar esa información a una salida serial RS232 para que pueda ser consumida por un rastreador GPS o un equipo compatible. Esta guía explica la información práctica sobre el servidor y el flujo de trabajo necesaria para integrar el dispositivo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma intentará detectar el protocolo una vez que el rastreador empiece a enviar datos. Los pasos exactos de configuración en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los detalles específicos del dispositivo con la documentación del fabricante.

## Visión general de la configuración

El objetivo del proceso de configuración es preparar el CAN-9600 y el rastreador conectado para enviar datos FMS y telemetría a Plaspy para su monitoreo y reporte. En términos prácticos, la configuración se centra en apuntar el rastreador o agregador al endpoint de Plaspy, validar la conectividad y asegurarse de que la alimentación FMS desde el CAN-9600 esté disponible para el dispositivo de seguimiento.

- Configure el rastreador GPS o agregador conectado para usar el endpoint del servidor Plaspy, de modo que los datos FMS reenviados desde el CAN-9600 lleguen a la plataforma.
- Seleccione el transporte correcto (UDP o TCP) en el rastreador si la interfaz del dispositivo lo requiere.
- Establezca el puerto compartido de Plaspy para que la plataforma reciba los paquetes entrantes desde el dispositivo.
- Verifique que la salida RS232 del CAN-9600 esté conectada y entregando tramas FMS al dispositivo de seguimiento.
- Confirme que el dispositivo aparezca en Plaspy y que los campos FMS relevantes para su flujo de trabajo se estén reportando.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy  

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador después de que el dispositivo comience a reportar al endpoint indicado arriba.

## Requisitos típicos antes de la configuración

- Acceso físico al CAN-9600 y al rastreador GPS o equipo que consumirá la salida RS232.
- Un rastreador GPS o agregador compatible que acepte entrada FMS por RS232 y permita configurar el servidor de forma remota.
- Acceso al método de configuración oficial de Gosafe o al software del proveedor para la configuración inicial y resolución de problemas.
- Capacidad de red o SMS si la herramienta del fabricante o del rastreador requiere comandos SMS para la configuración, incluyendo una SIM funcional y cobertura cuando se use el método por SMS.
- Alimentación para el CAN-9600 y el rastreador conectado durante los pasos de configuración y validación.
- Posibilidad de reiniciar o cortar y restaurar la alimentación del rastreador y del CAN-9600 si es necesario para aplicar ajustes.

## Cómo se conecta este rastreador a Plaspy

El CAN-9600 lee datos FMS del vehículo desde el bus CAN y entrega esa información por una interfaz serial RS232. Un rastreador GPS o gateway compatible ingiere la secuencia RS232 y reenvía las cargas útiles de telemetría y FMS relevantes al endpoint y puerto del servidor Plaspy para su procesamiento y visualización.

- El CAN-9600 proporciona tramas FMS a un rastreador conectado mediante RS232.
- El rastreador GPS reenvía los datos a d.plaspy.com (o a 54.85.159.138) usando el puerto 8888.
- El transporte puede ser UDP o TCP según el rastreador; elija el que su dispositivo soporte.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los datos llegan al puerto compartido.
- Tras comenzar el reporte, el dispositivo será visible y se activará el envío de eventos en Plaspy.

## Flujo de trabajo típico de configuración

1. Consulte la documentación oficial de Gosafe o el software/método de configuración proporcionado por el proveedor de su rastreador GPS para conocer los mapeos de entrada FMS soportados y los comandos de configuración.
2. Configure el rastreador conectado para reportar a d.plaspy.com o, si usa un destino IP, a 54.85.159.138.
3. Establezca el puerto de reporte en 8888 en el rastreador (todos los dispositivos en Plaspy usan el mismo puerto).
4. Si el rastreador requiere seleccionar el transporte, elija UDP o TCP según la capacidad del equipo.
5. Guarde o aplique la configuración en la interfaz del rastreador o gateway.
6. Reinicie el rastreador y, si es necesario, el CAN-9600 o cualquier gateway intermedio para asegurar que los ajustes entren en vigor.
7. Valide en Plaspy que el dispositivo está reportando y que los campos FMS esperados son visibles en la plataforma.

## Ejemplos de comandos de configuración

La descripción del CAN-9600 proporcionada no incluye cadenas de comandos específicas para configurar el servidor. Los comandos exactos de configuración varían según el rastreador o gateway que conecte al CAN-9600 y según el firmware del fabricante. Use la documentación oficial de Gosafe y las herramientas del proveedor del rastreador para introducir el dominio del servidor o la IP y el puerto 8888, y para seleccionar UDP o TCP si es necesario.

Si su rastreador admite configuración por SMS, puede usar comandos SMS del proveedor para establecer el servidor y el puerto. Consulte el manual del proveedor del rastreador para la sintaxis exacta de los comandos SMS y los marcadores de posición.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de configuración disponibles y la sintaxis de los comandos; confirme siempre los pasos exactos para la versión de hardware en producción.
- Elija UDP o TCP según las capacidades del rastreador y los requisitos operativos; UDP es común para telemetría de baja latencia mientras que TCP puede usarse cuando se requiere entrega garantizada.
- El CAN-9600 entrega datos FMS por RS232; asegúrese de que el cableado serial, la velocidad en baudios y el mapeo de entradas en el rastreador consumidor estén configurados según las instrucciones del proveedor.
- La configuración por SMS puede estar disponible, pero depende del dispositivo o gateway utilizado; valide si necesita una tarjeta SIM funcional y servicio de SMS para su flujo de configuración.
- Al solucionar problemas de conectividad, verifique tanto los ajustes del servidor en el rastreador como que Plaspy está recibiendo paquetes en d.plaspy.com puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el CAN-9600 junto con un rastreador compatible y Plaspy permite a los operadores de flota combinar datos FMS del vehículo con telemetría de ubicación para obtener información operativa más rica. Esta configuración ayuda a los equipos a monitorear indicadores de salud del vehículo, métricas de combustible y motor cuando el feed FMS lo soporta, y a centralizar los datos en Plaspy para informes y toma de decisiones operativas.

Para saber más sobre cómo Plaspy puede recibir y mostrar datos FMS de dispositivos como el Gosafe CAN-9600, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre la configuración específica del dispositivo, instrucciones de firmware y orientación del fabricante, verifique la documentación oficial de Gosafe en https://gosafesystem.com/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
