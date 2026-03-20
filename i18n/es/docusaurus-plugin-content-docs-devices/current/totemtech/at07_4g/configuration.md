---
slug: /totemtech/at07_4g/configuration
id: at07_4g-configuration
sidebar_label: Configuration
title: Totemtech - AT07-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Totemtech AT07-4G con el servidor Plaspy y comandos SMS
keywords:
  - Configuración Totemtech AT07 4G
  - Instalación Totemtech AT07 4G
  - Integración AT07 4G Plaspy
  - Configuración rastreador GPS AT07 4G
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de flotas
  - Configuración SMS rastreador GPS
  - Configuración GPRS rastreador
  - Ajustes servidor rastreador vehicular
  - Integración telemetría Plaspy
---

# Totemtech - Configuración AT07-4G

Esta página documenta el contexto público de configuración para usar el rastreador Totemtech AT07-4G con la plataforma de rastreo Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos SMS proporcionados por el fabricante que se emplean habitualmente para preparar el dispositivo y que reporte a Plaspy para rastreo y telemetría en tiempo real. Utilice esto como referencia operativa y confirme cualquier diferencia de firmware o herramienta del proveedor con la documentación oficial del fabricante.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador para las conexiones entrantes; sin embargo, los pasos exactos del lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El AT07-4G soporta configuración por SMS y GPRS, y los comandos SMS de ejemplo abajo muestran cómo ajustar el APN, el servidor GPRS y parámetros básicos de reporte para su uso con Plaspy.

## Resumen de configuración

Configurar el AT07-4G para Plaspy consiste en apuntar el dispositivo al endpoint del servidor Plaspy, asegurarse de que tenga conectividad celular funcional y credenciales APN correctas, y habilitar el comportamiento de reporte requerido para que la ubicación y los eventos se entreguen de forma fiable a Plaspy. El fabricante proporciona comandos por SMS para muchas tareas comunes que pueden usarse en instalaciones de campo o durante la configuración en banco.

- Establecer el APN del operador y las credenciales APN opcionales para que el dispositivo pueda iniciar una sesión GPRS
- Configurar el dispositivo para que reporte al endpoint o IP del servidor Plaspy y al puerto compartido de Plaspy
- Elegir el modo de transporte soportado por el dispositivo cuando sea necesario y habilitar el reporte con acuse de recibo
- Ajustar intervalos de reporte y parámetros de eventos para controlar cuándo se envía la información a Plaspy
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy tras aplicar la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para los datos entrantes

Estos valores son los datos públicos del endpoint de Plaspy y se usan en dispositivos AT07-4G configurados para reportar a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de configurar

- Un equipo AT07-4G con alimentación y una SIM válida con datos móviles activos o servicio de SMS
- Datos APN del operador de la SIM, incluyendo nombre del APN y, si aplica, usuario y contraseña del APN
- Acceso al número telefónico del dispositivo para enviar comandos SMS o acceso a la herramienta oficial de configuración del fabricante
- Familiaridad con la contraseña por defecto del dispositivo en caso de que los comandos SMS requieran autenticación
- Un plan de pruebas para confirmar que el dispositivo alcanza el servidor Plaspy y aparece en la plataforma después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AT07-4G se configura para abrir una sesión GPRS y enviar telemetría al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo tiene acceso a la red y los ajustes de servidor correctos, transmitirá posiciones y notificaciones de eventos para que Plaspy proporcione mapas en vivo, alertas e historial.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138
- Todos los dispositivos usan el mismo puerto Plaspy 8888 para reportes
- El rastreador usa UDP o TCP según lo seleccionado en la configuración y Plaspy aceptará cualquiera de los dos transportes
- Plaspy detecta automáticamente el protocolo entrante del rastreador y procesa los mensajes de ubicación y eventos
- Tras una configuración exitosa, el dispositivo envía actualizaciones periódicas de ubicación e informes de eventos a Plaspy para monitoreo y visibilidad

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o a la herramienta del proveedor, o prepárese para enviar comandos SMS al número del dispositivo
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según el formato requerido por el dispositivo
3. Establezca el puerto del servidor en 8888 según lo requiera la configuración del equipo
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante o enviando los comandos SMS documentados
6. Reinicie el dispositivo si el fabricante recomienda hacerlo después de la configuración
7. Valide que el dispositivo reporte a Plaspy y sea visible en la plataforma mediante actualizaciones de ubicación en vivo y mensajes de evento

Si configura varios dispositivos, aplique este flujo de trabajo de forma consistente y confirme la visibilidad en Plaspy después de configurar cada unidad.

## Comandos de configuración de ejemplo

El AT07-4G puede configurarse usando comandos SMS. A continuación se muestran los comandos públicos por SMS proporcionados por el fabricante en el orden comúnmente utilizado. El ejemplo asume que la contraseña SMS por defecto del dispositivo es 000000. Reemplace [apn], [apnu] y [apnp] por el nombre del APN del operador, el usuario del APN y la contraseña del APN según sea necesario.

- Comando opcional de reinicio de fábrica inicial usando la contraseña por defecto
```text
*000000,007#
```

- Establecer el APN del operador incluyendo usuario y contraseña opcionales
```text
*000000,002,[apn],[apnu],[apnp]#
```
Explicación: reemplace [apn] por el APN del operador móvil y opcionalmente [apnu] y [apnp] por el usuario y la contraseña del APN si el operador los requiere.

- Establecer el servidor GPRS para que reporte a Plaspy por IP y puerto
```text
*000000,003,54.85.159.138,8888,1
```
Explicación: este comando configura la IP y el puerto del servidor a los valores públicos de Plaspy. Mantenga el formato de comando requerido por su firmware.

- Habilitar reporte con acuse de recibo
```text
*000000,019,1#
```

- Establecer el intervalo de actualización a 60 segundos
```text
*000000,60,60,0,60#
```
Notas sobre el uso
- Envíe cada SMS al número del dispositivo desde un número autorizado si el rastreador restringe comandos SMS.
- La contraseña por defecto mostrada es 000000. Actualice la contraseña del dispositivo después de la configuración inicial cuando el equipo lo permita, para asegurar los comandos remotos.
- Mantenga el orden de los comandos consistente con la guía del fabricante cuando así se indique.

## Notas de configuración

- La configuración por SMS es soportada y útil para instalaciones de campo, pero también pueden existir herramientas del fabricante o software de configuración para PC según su proveedor
- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos o los parámetros disponibles; confirme los comandos con la versión de firmware del dispositivo que tenga en mano
- El AT07-4G puede usar UDP o TCP para conectarse a Plaspy; elija el transporte adecuado según su instalación y el firmware del dispositivo
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del dispositivo para las conexiones entrantes
- Cambie las contraseñas por defecto y asegure los números autorizados para enviar SMS cuando sea posible para reducir el riesgo de configuración no autorizada

## Por qué usar Plaspy con esta configuración

Configurar el AT07-4G para que reporte a Plaspy proporciona visibilidad consistente de la flota, reporte de eventos e integración de telemetría dentro de una única plataforma. Para operaciones que dependen de alertas antirrobo, monitoreo de combustible o telemetría en flotas mixtas, la combinación del hardware AT07-4G y los ajustes del servidor Plaspy soporta reportes confiables y almacenamiento histórico de trazas.

Para saber más sobre Plaspy y cómo la plataforma maneja conexiones de dispositivos y telemetría visite https://www.plaspy.com. Las especificaciones del fabricante, la sintaxis de comandos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los detalles de configuración específicos del dispositivo y la información de firmware en el sitio oficial de Totemtech http://www.totemtek.com/ antes de desplegar a gran escala.
