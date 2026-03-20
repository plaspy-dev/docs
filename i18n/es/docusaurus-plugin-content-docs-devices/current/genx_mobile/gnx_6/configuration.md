---
slug: /genx_mobile/gnx_6/configuration
id: gnx_6-configuration
sidebar_label: Configuration
title: GenX Mobile - GNX-6 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GenX Mobile GNX-6 a Plaspy con ajustes de servidor y flujo de configuración prácticos
keywords:
  - Configuración GenX Mobile GNX 6
  - Instalación GNX 6 Plaspy
  - Configuración de servidor GNX 6
  - Configuración rastreador GPS GenX Mobile
  - Configuración software seguimiento GNX 6
  - Preparación plataforma GPS GNX 6
  - Configuración rastreador Plaspy
  - Seguimiento vehicular GNX 6
  - Guía integración GNX 6
  - Configurar rastreador en Plaspy
---

# GenX Mobile - Configuración del GNX-6

Esta página ofrece el contexto público de configuración para usar el rastreador GenX Mobile GNX-6 con Plaspy. Se centra en los ajustes de servidor prácticos y en los pasos generales que deberá aplicar por el lado del fabricante para que el dispositivo pueda comunicarse con Plaspy. Utilice esta guía junto con la documentación oficial de GenX Mobile y sus herramientas de instalación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme el método exacto para el GNX-6 con GenX Mobile antes del despliegue.

## Resumen de la configuración

Esta sección resume el propósito de configurar el GNX-6 para Plaspy y lo que debe lograr antes de verificar la visibilidad del dispositivo en la plataforma.

- Prepare el GNX-6 para que reporte al endpoint y puerto del servidor de Plaspy usado por todos los dispositivos compatibles.
- Asegure la conectividad celular y un estado de salud básico del equipo para que datos de ubicación y eventos se transmitan de forma confiable.
- Seleccione el tipo de transporte que requiera su firmware GNX-6 e ingrese la dirección del servidor Plaspy.
- Valide que el dispositivo aparezca en Plaspy y confirme que la plataforma está recibiendo actualizaciones periódicas de ubicación y eventos.
- Verifique el comportamiento del acelerómetro y el reporte de eventos si su despliegue exige monitoreo de comportamiento del conductor o eventos de impacto.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el GNX-6 para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo cuando se establece la conexión.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse el dispositivo

## Requisitos típicos antes de la configuración

- Confirme que el GNX-6 tenga alimentación estable y esté encendido durante la configuración y las pruebas.
- Conectividad celular activa y una SIM con datos habilitados configurada en el equipo si va a reportar por celular.
- Acceso al método o software de configuración oficial de GenX Mobile para el GNX-6.
- Conocer la revisión de firmware del equipo para seguir el flujo de configuración correcto para esa versión.
- Una cuenta en Plaspy y la capacidad de ver conexiones entrantes de dispositivos para validar el reporte.
- Un entorno de prueba seguro para verificar el reporte antes del despliegue en producción.

## Cómo se conecta este rastreador a Plaspy

El GNX-6 se configura para enviar datos de ubicación y eventos a Plaspy apuntando el dispositivo al endpoint y puerto compartido de la plataforma. Una vez configurado, Plaspy reconocerá automáticamente el protocolo del rastreador y comenzará a ingerir los mensajes de ubicación y eventos.

- El dispositivo reporta telemetría al endpoint de Plaspy d.plaspy.com o a su IP 54.85.159.138.
- Todo el tráfico se envía al puerto 8888 independientemente del modelo.
- Puede elegir UDP o TCP en el dispositivo si el firmware exige seleccionar el transporte.
- Plaspy realiza detección automática de protocolo para interpretar los mensajes entrantes del GNX-6.
- Eventos como disparos del acelerómetro se envían como parte del flujo de datos del rastreador y aparecen en Plaspy una vez que el dispositivo está reportando.

## Flujo de configuración común

Siga estos pasos prácticos y públicos para configurar un GNX-6 con Plaspy. Los nombres exactos de menús e interfaces dependen de las herramientas y el firmware de GenX Mobile.

1. Acceda al método o software de configuración oficial de GenX Mobile para el GNX-6 proporcionado por el proveedor.
2. Ingrese la dirección del servidor Plaspy utilizando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Establezca el puerto del servidor en 8888, coincidiendo con el puerto que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si el equipo le solicita seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en el menú del dispositivo o en la herramienta.
6. Reinicie el GNX-6 si el proceso de configuración o el firmware requiere reboot para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando la aparición del equipo en la plataforma y confirmando la recepción de actualizaciones de ubicación.

## Ejemplos de comandos de configuración

El método de configuración del GNX-6 varía según el firmware de GenX Mobile y la herramienta del proveedor. Dado que GenX Mobile ofrece diferentes interfaces de configuración, no se presentan aquí comandos o cadenas SMS exactas. Consulte la guía de configuración oficial de GenX Mobile o la herramienta del fabricante para la sintaxis y los ejemplos precisos.

Si recibe ejemplos de comandos de GenX Mobile o de un revendedor, aplíquelos en el orden recomendado por el fabricante y mantenga los marcadores como {{apn}}, {{apnu}} o {{apnp}} exactamente como se proporcionan hasta que los reemplace por los valores de su operador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú, los transportes disponibles y la sintaxis requerida. Siempre confirme la versión de firmware del GNX-6 antes de seguir un procedimiento.
- Si su firmware del GNX-6 solicita selección de transporte, elija UDP o TCP según convenga a su entorno; Plaspy acepta ambos en el mismo puerto.
- Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, por lo que ingresar la dirección y el puerto correctos es el requisito principal.
- Para despliegues que dependen de eventos del acelerómetro, verifique los umbrales de evento y el comportamiento de reporte en la herramienta de configuración del GNX-6.
- Mantenga la documentación del fabricante a mano para campos específicos del dispositivo y cualquier comando que el proveedor requiera para habilitar el reporte.

## Por qué usar Plaspy con esta configuración

Usar el GNX-6 con Plaspy le permite consolidar de forma sencilla el reporte de ubicación de vehículos y activos en una única plataforma. La configuración de servidor compartido y la detección automática de protocolos de Plaspy simplifican el despliegue al minimizar las diferencias por dispositivo y permitir que usted se enfoque en la colocación del equipo, la conectividad y la validación de eventos.

Para más información sobre Plaspy e integraciones compatibles visite https://www.plaspy.com. Para detalles específicos de configuración del GNX-6, notas de firmware y comandos del fabricante consulte la documentación oficial de GenX Mobile en http://www.genxmobile.com/
