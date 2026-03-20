---
slug: /gotop/g06b/configuration
id: g06b-configuration
sidebar_label: Configuration
title: GOTOP - G06B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP G06B para integrarlo con Plaspy y los ajustes de servidor necesarios
keywords:
  - Configuración GOTOP G06B
  - Instalación GOTOP G06B
  - Configuración de servidor GOTOP G06B
  - GOTOP G06B Plaspy
  - Rastreador GPS GOTOP
  - Rastreador 4G G06B
  - Configuración rastreador GOTOP
  - Instalación rastreador GPS vehicular
  - Seguimiento de flota G06B
  - Configuración servidor Plaspy
---

# GOTOP - G06B Configuración

Esta página ofrece el contexto público de configuración para usar el rastreador GPS GOTOP G06B con Plaspy. Describe los ajustes prácticos de servidor y el flujo de trabajo general necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y estados a la plataforma. La guía se concentra en el endpoint compartido de Plaspy y en los pasos típicos que realizará desde el lado del fabricante o instalador para registrar el dispositivo en la plataforma.

Plaspy utiliza un único endpoint compartido y puerto para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta página como referencia práctica de integración y verifique los detalles específicos del equipo con la documentación oficial de GOTOP cuando sea necesario.

## Visión general de la configuración

Configurar el G06B para usar con Plaspy implica preparar el equipo para enviar sus datos al endpoint de Plaspy y verificar la conectividad para que la unidad aparezca en su cuenta de Plaspy. El rastreador soporta conectividad 4G e interacción por SMS, por lo que la configuración suele incluir asegurarse de que la SIM y los ajustes de red sean correctos e introducir los datos del servidor de Plaspy en el dispositivo o mediante la herramienta del fabricante.

- Configure la dirección del servidor del dispositivo para Plaspy para que eventos de ubicación y alarmas se reenvíen a la plataforma.
- Asegúrese de que el rastreador tenga una SIM 4G operativa y el APN correcto para alcanzar el servidor de Plaspy.
- Seleccione el protocolo de transporte si el firmware del dispositivo requiere elegir entre UDP o TCP.
- Guarde y aplique los ajustes, luego valide que el dispositivo informe a Plaspy.
- Confirme que alertas como ACC, SOS y eventos de geocerca sean visibles en Plaspy tras la conexión.

## Ajustes de servidor de Plaspy

Use estos ajustes exactos de conexión a Plaspy al configurar el G06B para que reporte a Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Incluya el dominio o la IP en la configuración del dispositivo según lo soporte la herramienta del fabricante. Se recomienda usar el dominio d.plaspy.com cuando haya disponibilidad de DNS.

## Requisitos típicos antes de la configuración

- Un dispositivo G06B cargado y con alimentación instalado o accesible para la configuración.
- Una tarjeta SIM 4G válida con un plan de datos activo y los ajustes APN de la SIM disponibles.
- Acceso al método de configuración GOTOP requerido por su firmware, como la app del fabricante, herramienta web o el conjunto de comandos por SMS.
- Información del identificador del dispositivo, por ejemplo el IMEI, para registrar o verificar la unidad en su flujo de trabajo de seguimiento.
- Conocimiento básico de si el firmware del dispositivo requiere seleccionar UDP o TCP al establecer el servidor.
- Acceso confirmado a su cuenta de Plaspy para validar el dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el G06B envía actualizaciones periódicas de ubicación y mensajes de eventos al endpoint de Plaspy en el puerto compartido. Plaspy recibe esos mensajes y determina automáticamente el parser de protocolo correcto para que los datos del dispositivo se muestren en la plataforma sin configurar el protocolo por separado.

- El rastreador apunta al dominio o IP de Plaspy y usa el puerto 8888 para toda la comunicación.
- El dispositivo envía informes de posición GPS en los intervalos configurados al endpoint de Plaspy.
- Alarmas de evento como cambio de ACC, SOS, movimiento y corte de energía se transmiten a Plaspy según la configuración del dispositivo.
- El transporte de datos se realiza por UDP o TCP según la selección y el soporte del dispositivo.
- Una vez que los mensajes llegan a d.plaspy.com, la plataforma detecta automáticamente el protocolo del rastreador e ingiere los datos del equipo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP para el G06B, como la app del fabricante, la herramienta web de configuración o el conjunto de comandos por SMS documentado.
2. Localice los ajustes de servidor o centro remoto y escriba d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto en 8888 en las opciones del servidor.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; de lo contrario, use el transporte predeterminado que ofrezca el firmware.
5. Verifique que APN y ajustes de la SIM sean correctos para que el dispositivo pueda acceder a Internet.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinicie el rastreador para activar los nuevos ajustes.
7. Valide que el dispositivo informe a Plaspy comprobando en su cuenta de Plaspy el primer posicionamiento o mensaje de estado del equipo.

## Ejemplos de comandos de configuración

El G06B puede configurarse usando los métodos oficiales de GOTOP. Los comandos exactos y los formatos SMS varían según el firmware y la herramienta del proveedor, por lo que el método que utilice dependerá del firmware del equipo y de la documentación de GOTOP. Si su instalador usa comandos por SMS, consulte la lista oficial de comandos GOTOP para conocer la sintaxis precisa necesaria para establecer servidor, puerto, transporte y APN.

Por ejemplo, muchos dispositivos GOTOP aceptan configuración por SMS o por herramienta en un patrón similar al siguiente ejemplo conceptual (verifique el manual oficial para el texto de comando y los marcadores exactos):

- Establecer servidor por dominio o IP (ejemplo conceptual)
```text
adminip d.plaspy.com 8888
```

- Establecer servidor por IP (ejemplo conceptual)
```text
adminip 54.85.159.138 8888
```

- Establecer transporte a TCP o UDP (ejemplo conceptual)
```text
setprotocol tcp
```

- Establecer APN con marcadores si lo requiere su SIM
```text
setapn {{apn}} {{apnu}} {{apnp}}
```

Nota: Los comandos anteriores son ilustrativos. Los comandos SMS o de herramienta y los nombres exactos de los parámetros difieren según el firmware. Conserve marcadores como {{apn}}, {{apnu}} y {{apnp}} cuando utilice plantillas de comandos y reemplácelos por los valores de su operador de SIM.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y los campos de configuración disponibles; confirme siempre el conjunto de comandos para la revisión de firmware de su G06B.
- Elija TCP o UDP según la fiabilidad de la red y la recomendación del fabricante; Plaspy acepta ambos transportes en el puerto 8888.
- Si usa configuración por SMS, deje un breve periodo para que el dispositivo reinicie y se registre en la red antes de validar la conexión a Plaspy.
- Verifique los ajustes APN de la SIM 4G para que el rastreador pueda establecer una sesión de datos y alcanzar d.plaspy.com.
- Guarde una copia del IMEI del dispositivo y de cualquier nombre o ID asignado para ayudar a localizar la unidad en Plaspy tras el primer reporte.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP G06B con Plaspy brinda a las organizaciones una forma sencilla de centralizar la visibilidad vehicular, las notificaciones y el monitoreo operativo. Al apuntar el rastreador al endpoint y puerto compartidos de Plaspy, los dispositivos comienzan a reportar posición y eventos a la plataforma, donde los gestores pueden ver historiales, recibir alarmas e integrar el rastreo en los flujos operativos.

Para saber más sobre Plaspy y cómo soporta dispositivos como el GOTOP G06B visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, el comportamiento del firmware y los pasos de configuración del fabricante, verifique los detalles en el sitio oficial de GOTOP https://www.gotop.cc/ ya que las especificaciones y métodos de instalación pueden cambiar con el tiempo.
