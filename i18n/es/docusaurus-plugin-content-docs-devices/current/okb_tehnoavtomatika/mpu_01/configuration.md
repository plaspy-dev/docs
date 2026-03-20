---
slug: /okb_tehnoavtomatika/mpu_01/configuration
id: mpu_01-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MPU-01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OKB Tehnoavtomatika MPU 01 y apuntarlo a Plaspy para seguimiento
keywords:
  - Configuración OKB Tehnoavtomatika MPU 01
  - MPU 01 configuración Plaspy
  - Configuración servidor MPU 01
  - Configuración rastreador GPS MPU 01
  - Configuración plataforma de rastreo MPU 01
  - Configuración rastreador GPS OKB Tehnoavtomatika
  - Configuración SMS MPU 01
  - Integración rastreador Plaspy
  - Rastreo vehicular MPU 01
  - Ajustes servidor rastreador GPS
---

# OKB Tehnoavtomatika - MPU-01 Configuración

Esta página ofrece contexto público para configurar el rastreador OKB Tehnoavtomatika MPU-01 con Plaspy. Resume los ajustes de servidor y el flujo práctico necesarios para que el MPU-01 informe a la plataforma Plaspy y para confirmar su visibilidad en la interfaz de Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo del fabricante para el MPU-01 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La descripción del MPU-01 —incluyendo su receptor GPS de alta sensibilidad, soporte de SMS por canal GSM y diseño compacto— es la base de la guía que sigue.

## Resumen de configuración

El objetivo al configurar un MPU-01 para Plaspy es preparar el dispositivo para comunicarse de forma fiable con el servidor de Plaspy, validar la conectividad por el transporte elegido y permitir que el dispositivo aparezca y reporte eventos dentro de Plaspy. El MPU-01 admite mensajería SMS por GSM y dispone de opciones de factor de forma pequeño que los instaladores deben considerar.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que la telemetría llegue al extremo correcto.  
- Seleccionar el protocolo de transporte compatible con el dispositivo y con Plaspy, UDP o TCP, y configurar el puerto compartido.  
- Aplicar y guardar los ajustes usando el método oficial de configuración de OKB Tehnoavtomatika o mediante comandos SMS si están soportados.  
- Reiniciar o reiniciar la alimentación del dispositivo si es necesario para activar los nuevos ajustes de servidor.  
- Verificar que el dispositivo aparece en Plaspy y que envía actualizaciones de ubicación y reportes de estado.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888 depending on device capability  
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

(Nota: los valores anteriores deben introducirse tal cual en la configuración del dispositivo.)

## Requisitos habituales antes de la instalación

- Una unidad MPU-01 alimentada con la batería requerida o conexión a la alimentación del vehículo y todos los accesorios de instalación necesarios.  
- Acceso al método de configuración oficial de OKB Tehnoavtomatika o a la herramienta aprobada por el proveedor para configurar el MPU-01.  
- Una SIM GSM válida y cobertura de red si se va a usar SMS o telemetría celular, ya que el MPU-01 admite SMS vía canales GSM.  
- Saber si la unidad MPU-01 acepta configuración por SMS, consola serie o software de configuración dedicado.  
- Acceso a los datos de su cuenta Plaspy para verificar el dispositivo tras la configuración.  
- Un plan de pruebas básico para confirmar la conectividad y el reporte una vez aplicados los ajustes de servidor.

## Cómo se conecta este rastreador a Plaspy

El MPU-01 se configura para enviar sus mensajes de ubicación y estado a Plaspy indicando su endpoint de servidor y las opciones de transporte al dominio y puerto compartidos de Plaspy. Plaspy recibe los datos entrantes en el puerto común e identifica automáticamente el protocolo del rastreador, de modo que los dispositivos se vuelven visibles sin puertos específicos por modelo.

- El rastreador se apunta al dominio o IP y puerto del servidor Plaspy para que la telemetría fluya hacia Plaspy.  
- Los datos pueden enviarse por UDP o TCP según el transporte seleccionado en la configuración del dispositivo.  
- Plaspy escucha en el puerto 8888 para todos los dispositivos y realiza detección automática del protocolo.  
- Una vez conectado, el dispositivo reportará actualizaciones periódicas de posición y eventos de estado a Plaspy.  
- La visibilidad en Plaspy confirma la comunicación exitosa y permite monitoreo y alertas.

## Flujo habitual de configuración

1. Acceda al método o software oficial de configuración de OKB Tehnoavtomatika para el MPU-01 que proporcione el fabricante o su instalador.  
2. En los ajustes de servidor, introduzca el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.  
3. Configure el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.  
4. Seleccione UDP o TCP si el MPU-01 requiere elegir un protocolo de transporte.  
5. Aplique o guarde los cambios en la herramienta de configuración del dispositivo o mediante comandos SMS si están soportados.  
6. Reinicie o realice un ciclo de alimentación del MPU-01 si las instrucciones del fabricante requieren un reinicio para aplicar los cambios.  
7. Valide que el dispositivo reporta a Plaspy comprobando la visibilidad del equipo y los mensajes recientes en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

No se proporcionaron comandos modelConfiguration públicos para el MPU-01 en este documento. Los comandos exactos y la sintaxis pueden variar según el firmware y la herramienta del fabricante que utilice. Para unidades MPU-01 que soporten configuración por SMS, los flujos típicos implican enviar cadenas de configuración por SMS o usar la utilidad de configuración del proveedor; para unidades configuradas mediante software, introduzca directamente los ajustes del servidor Plaspy en el panel de servidor o red.

Si dispone de ejemplos de comandos suministrados por el fabricante o plantillas SMS de OKB Tehnoavtomatika, aplíquelos en el orden recomendado por el proveedor y reemplace cualquier marcador de posición, como valores de APN, con su información de red real.

## Notas de configuración

- Las revisiones de firmware y hardware del MPU-01 pueden cambiar las opciones de configuración disponibles; confirme siempre las instrucciones específicas por versión con el fabricante.  
- Elija UDP o TCP según las necesidades de su instalación y las indicaciones del instalador u operador de red; ambos transportes están soportados por Plaspy en el puerto 8888.  
- La configuración basada en SMS puede estar disponible para la puesta en marcha inicial o cambios remotos si el MPU-01 la soporta; consulte el manual del dispositivo para la sintaxis de comandos SMS.  
- Plaspy utiliza un puerto compartido y detección automática de protocolo, de manera que la configuración en el dispositivo se centra en la selección del endpoint y del transporte en lugar de puertos personalizados.  
- Mantenga un registro de los ajustes originales del dispositivo antes de realizar cambios para poder revertir si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el OKB Tehnoavtomatika MPU-01 para que reporte a Plaspy ofrece una forma sencilla de centralizar la telemetría y la localización de dispositivos en una única plataforma de visibilidad de flotas o activos. El uso de los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos reduce la complejidad por dispositivo y facilita el despliegue masivo.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique las instrucciones de instalación más recientes con OKB Tehnoavtomatika en http://www.okb-ta.ru/ antes de finalizar las instalaciones.
