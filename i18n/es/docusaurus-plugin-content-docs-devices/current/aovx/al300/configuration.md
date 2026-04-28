---
slug: /aovx/al300/configuration
id: al300-configuration
sidebar_label: Configuration
title: AOVX - AL300 Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del AOVX AL300 para Plaspy con detección de protocolo y guía de integración del rastreador
keywords:
  - configuración del AOVX AL300
  - configuración del AOVX AL300 para Plaspy
  - configuración del servidor AOVX AL300
  - configuración del rastreador GPS AOVX AL300
  - configuración de la plataforma de rastreo AOVX AL300
  - configuración del dispositivo AOVX AL300
  - configuración de rastreadores Plaspy
  - configuración de rastreadores GPS para Plaspy
  - configuración de rastreadores de activos
  - guía de integración del AOVX AL300
---

# AOVX - AL300 Configuration

Esta página cubre el contexto público de configuración para usar el AOVX AL300 con Plaspy. Se enfoca en los ajustes compartidos del servidor, el flujo práctico de configuración y los comandos SMS públicos disponibles para la configuración inicial del rastreador.

Plaspy utiliza el mismo puerto de servidor para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la incorporación a la plataforma. Al mismo tiempo, los pasos exactos de configuración del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración o el flujo por SMS que proporcione AOVX.

## Panorama de la configuración

Configurar el AOVX AL300 para Plaspy significa preparar el rastreador para enviar sus datos al punto final del servidor de Plaspy, confirmar el puerto de comunicación y validar que el dispositivo esté reportando correctamente. La información pública de configuración para este modelo utiliza comandos SMS para definir el destino de red, el intervalo de reporte y el modo GPRS antes de verificar el estado actual.

- Dirija el rastreador al punto final compartido del servidor de Plaspy usado por los dispositivos compatibles
- Configure el puerto correcto para que el AL300 pueda establecer comunicación con Plaspy
- Elija el modo de transporte requerido por el dispositivo cuando sea necesario seleccionar TCP o UDP
- Aplique un intervalo de reporte que coincida con la frecuencia de rastreo deseada
- Verifique la configuración y el estado del dispositivo antes de poner el rastreador en servicio
- Confirme que el dispositivo aparezca en Plaspy después de que comience la comunicación de red

## Ajustes del servidor en Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos comunes antes de la configuración

- El rastreador debe estar encendido y listo para configurarse
- Usted debe tener acceso al método o software oficial de configuración de AOVX
- El dispositivo debe estar preparado para aceptar los comandos públicos de configuración cuando se use la configuración por SMS
- Los ajustes del operador que requiere el dispositivo deben estar disponibles antes de aplicar la configuración de red
- Usted debe confirmar que el modelo del rastreador está diseñado para funcionar con el punto final del servidor de Plaspy
- La instalación debe estar completada o en proceso para que el dispositivo pueda validarse después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AOVX AL300 se configura para enviar datos de rastreo al punto final compartido del servidor de Plaspy en el puerto 8888, usando UDP o TCP cuando el dispositivo requiere selección de transporte. Una vez que comienza la comunicación, Plaspy identifica automáticamente el protocolo del rastreador y procesa los datos entrantes sin que el usuario tenga que elegir manualmente un protocolo dentro de la plataforma.

- El dispositivo se dirige para reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138
- La comunicación se establece a través del puerto 8888, que se usa en todos los dispositivos compatibles con Plaspy
- Se puede seleccionar UDP o TCP según el método de configuración del dispositivo y el comportamiento del firmware
- Una vez que el rastreador se conecta, Plaspy detecta automáticamente el protocolo que está utilizando
- La posición y los datos del dispositivo quedan disponibles en la plataforma después de que el rastreador comienza a reportar
- El reporte continuo ayuda a mantener visibilidad, alertas y control operativo

## Flujo de configuración habitual

1. Abra el método o software oficial de configuración de AOVX para el AL300.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o use la IP del servidor 54.85.159.138 si esa es la ruta de configuración preferida.
3. Configure el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo o la herramienta de configuración requiere selección de transporte.
5. Aplique o guarde la configuración para que el rastreador almacene los nuevos datos del servidor.
6. Si el flujo del fabricante lo requiere, reinicie el dispositivo para que los nuevos ajustes surtan efecto.
7. Revise el estado del rastreador y confirme que comience a reportar a Plaspy.
8. Valide que el dispositivo sea visible en Plaspy y que esté enviando datos en el intervalo esperado.

## Ejemplos de comandos de configuración

El flujo público de configuración del AOVX AL300 se puede realizar mediante comandos SMS. El método exacto puede variar según el firmware o la herramienta del fabricante, pero los siguientes comandos reflejan la secuencia pública de configuración proporcionada para este modelo.

- Configurar el APN del operador

```text
APN,{{apn}}#
```

Use `{{apn}}` para el nombre del APN del operador. Si su operador requiere usuario y contraseña, incluya `{{apnu}}` y `{{apnp}}` según el formato del comando.

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS en Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

Este comando apunta el dispositivo al dominio del servidor de Plaspy y al puerto compartido.

- Configurar el intervalo de actualización

```text
TIMER,60,60#
```

- Cambiar el dispositivo al modo GPRS

```text
GPRSON,1#
```

- Consultar la configuración actual

```text
PARAM#
```

- Consultar el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- La secuencia pública de comandos utiliza configuración por SMS, por lo que el dispositivo debe poder recibir mensajes de configuración
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración del servidor compartido
- Si el dispositivo admite selección entre UDP y TCP, use la opción que requiera su implementación o firmware
- El AL300 puede comportarse de manera distinta entre revisiones de firmware, así que siempre confirme la configuración final con la documentación del fabricante
- Las consultas públicas de estado y parámetros son útiles después de guardar los ajustes para confirmar que el rastreador aceptó la configuración

## Por qué usar Plaspy con esta configuración

Usar el AOVX AL300 con Plaspy ayuda a las organizaciones a centralizar la visibilidad de sus rastreadores en una plataforma compartida, manteniendo una configuración sencilla. Con un solo punto final de servidor, un puerto común y detección automática de protocolo, el proceso de configuración se mantiene consistente en los dispositivos compatibles y encaja bien en flujos de trabajo de monitoreo de activos.

Para obtener la información más reciente de Plaspy, conozca más en el sitio principal https://www.plaspy.com. Para conocer el comportamiento de configuración específico del dispositivo, los detalles del firmware y las instrucciones del fabricante, verifique la información más reciente en el sitio oficial de AOVX https://www.aovx.com/.
