---
slug: /topshine/ogt01/configuration
id: ogt01-configuration
sidebar_label: Configuration
title: TopShine - OGT01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador OBD II TopShine OGT01 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración TopShine OGT01
  - Configuración OGT01 Plaspy
  - Configuración tracker TopShine
  - Rastreador OBD II configuración
  - Configuración servidor Plaspy
  - Configuración seguimiento vehicular
  - Comandos SMS rastreador GPS
  - Configuración flota
  - Flujo de instalación seguimiento
  - Plataforma configuración rastreo
---

# TopShine - Configuración OGT01

Esta página documenta el contexto público de configuración para usar el rastreador OBD II TopShine OGT01 con Plaspy. Reúne los ajustes de servidor prácticos, el flujo de trabajo recomendado y ejemplos de comandos SMS proporcionados por el fabricante que suelen usarse para apuntar el equipo a la plataforma Plaspy. Utilice esta guía como referencia técnica para preparar el dispositivo para su integración con Plaspy; consulte al fabricante para detalles específicos del dispositivo o diferencias de firmware.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; para este modelo el fabricante ofrece plantillas de comandos SMS y orientación básica de configuración GPRS que se pueden aplicar para dirigir el dispositivo al endpoint de Plaspy.

## Resumen de configuración

Preparar el OGT01 para Plaspy implica configurar el rastreador para que envíe de forma fiable la ubicación y la telemetría OBD al endpoint del servidor de Plaspy, validar la conectividad y habilitar la cadencia de reporte adecuada para su flota o caso de uso. Las tareas siguientes resumen el propósito práctico del proceso de configuración.

- Configurar el APN y los ajustes de red del equipo para que el rastreador pueda usar datos GPRS y alcanzar Plaspy.
- Establecer el servidor del dispositivo al endpoint de Plaspy y asegurar que se utilice el puerto correcto para los reportes.
- Elegir el modo de transporte (UDP o TCP) si es necesario y confirmar que Plaspy recibe los mensajes; Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador.
- Verificar la identidad del dispositivo y el id basado en IMEI para que la plataforma reconozca los reportes de la unidad.
- Configurar los intervalos de reporte y el modo GPRS para que las actualizaciones en tiempo real y periódicas cumplan con las necesidades operativas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración y verificación basada en DNS.
- IP del servidor 54.85.159.138 como opción de endpoint directo.
- Puerto 8888 que Plaspy utiliza de forma uniforme para todos los dispositivos soportados.
- Soporte de transporte UDP o TCP; configure cualquiera de los dos en el dispositivo si es necesario.
- Detección automática de protocolo en Plaspy para que la plataforma identifique el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos típicos antes de la configuración

- Acceso físico al puerto OBD II del vehículo para instalar y alimentar el OGT01.
- Una tarjeta SIM activa en el rastreador con un APN de datos móviles correcto y servicio GPRS habilitado.
- Capacidad para enviar comandos SMS desde un teléfono móvil o usar la herramienta de configuración del fabricante cuando esté disponible.
- Número IMEI del dispositivo a mano para el id del equipo y el registro en la plataforma.
- Documentación del fabricante o acceso a soporte para información y actualizaciones específicas de firmware.
- Conocimientos básicos de los ajustes APN del operador de la tarjeta SIM para ingresarlos en el dispositivo.

## Cómo se conecta este rastreador a Plaspy

El OGT01 se conecta a Plaspy enviando ubicación, telemetría OBD e informes de eventos sobre GPRS (TCP o UDP) al endpoint y puerto compartido de Plaspy. Plaspy procesa esos mensajes, los asocia con la identidad del dispositivo y muestra los datos de ubicación y diagnóstico en paneles y herramientas de reporte.

- El rastreador se configura para reportar al endpoint compartido de Plaspy usando d.plaspy.com o la IP 54.85.159.138.
- Todo el tráfico del dispositivo hacia la plataforma se envía al puerto 8888, que Plaspy utiliza para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador (TCP o UDP) cuando la unidad se conecta, lo que simplifica la configuración del transporte.
- El dispositivo puede recurrir a SMS para ciertas operaciones si está configurado o si no hay GPRS disponible, y los datos en caché se cargan cuando se restablece la conectividad.
- La telemetría regular y las alertas por eventos serán visibles en Plaspy una vez que el dispositivo esté correctamente apuntado a la plataforma e identificado por IMEI o id de dispositivo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopShine, como comandos SMS o la herramienta del proveedor, según las instrucciones del fabricante.
2. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888 (Plaspy usa este mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el equipo requiere una selección explícita del transporte; Plaspy detectará el protocolo automáticamente cuando el dispositivo se conecte.
5. Configure el APN para la SIM instalada y guarde o aplique los cambios.
6. Reinicie o realice un ciclo de energía del dispositivo si es necesario para aplicar los nuevos ajustes GPRS.
7. Valide que el dispositivo reporte a Plaspy confirmando que el IMEI o id del dispositivo aparece en la plataforma y que se recibe telemetría.

## Ejemplos de comandos de configuración

El fabricante provee plantillas de comandos SMS para configurar el OGT01. La contraseña por defecto que se muestra en los ejemplos es 000000. Si usted o su proveedor cambiaron la contraseña del dispositivo, sustitúyala por 000000 en cada mensaje de comando.

- Reinicio de fábrica opcional (úselo solo si necesita restablecer los ajustes del equipo):
```text
W000000,990,099###
```

- Establecer el id del dispositivo (use los primeros 14 dígitos del IMEI). Plaspy identifica dispositivos por IMEI, así que asegúrese de que el IMEI sea correcto al registrarlo en la plataforma. Reemplace \<first14ofIMEI> con los primeros 14 dígitos del IMEI.
```text
W000000,010,<first14ofIMEI>
```

- Configurar el APN del operador. Use los valores de APN proporcionados por el operador de la SIM. Los campos de nombre de usuario y contraseña del APN son opcionales y se pueden añadir si son necesarios.
```text
W000000,011,[apn]
```
Forma opcional con usuario y contraseña del APN:
```text
W000000,011,[apn],[apnu],[apnp]
```
Nota: [apn] es el Access Point Name del operador. [apnu] y [apnp] son los marcadores de posición opcionales para usuario y contraseña del APN.

- Configurar el servidor GPRS al endpoint de Plaspy y el puerto 8888. Este comando usa la IP del servidor Plaspy; puede configurar el dominio d.plaspy.com en su lugar si el dispositivo soporta DNS.
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el dispositivo a modo GPRS (comando del fabricante para habilitar el informe por datos).
```text
W000000,013,2
```

- Establecer el intervalo de reporte/actualización. Ajuste el valor numérico al intervalo de reporte deseado según la guía del fabricante.
```text
W000000,014,6
```

- Consultar el IMEI del dispositivo (comando de verificación):
```text
W000000,601
```

Estos comandos deben enviarse como mensajes SMS individuales desde un número autorizado por el dispositivo (según las instrucciones del fabricante). Después de aplicar los ajustes de servidor y APN, verifique que el dispositivo comience a enviar datos a Plaspy en el puerto 8888 y que aparezca en su cuenta de Plaspy.

## Notas de configuración

- El firmware del fabricante y las variantes regionales pueden cambiar la sintaxis o el comportamiento de los comandos; siempre verifique la sintaxis exacta de comandos para su versión de firmware.
- La configuración por SMS es compatible con el OGT01 como se muestra en los ejemplos; esto resulta útil cuando se requiere la configuración inicial de APN y servidor sin una herramienta de configuración.
- Cuando el dispositivo acepta tanto dominio como IP, usar d.plaspy.com permite resolución mediante DNS mientras que 54.85.159.138 es una opción de endpoint directo.
- Elija TCP o UDP según los requisitos de la herramienta del dispositivo; Plaspy detectará automáticamente el protocolo, pero el equipo debe estar configurado para enviar por el transporte seleccionado.
- Confirme que el IMEI correcto se use al establecer el id del dispositivo, ya que Plaspy asocia los reportes entrantes con los dispositivos mediante IMEI/id.

## Por qué usar Plaspy con esta configuración

Usar el TopShine OGT01 con Plaspy ofrece una visibilidad de flota sencilla al combinar la telemetría plug-and-play OBD II con un endpoint compartido de Plaspy. Con el equipo apuntando a d.plaspy.com o a la IP proporcionada y al puerto 8888, la ubicación del vehículo, el diagnóstico del motor y las alertas por eventos se consolidan en una única plataforma para monitoreo, generación de reportes y análisis operativo.

Para obtener más información sobre Plaspy y flujos de trabajo compatibles visite https://www.plaspy.com. Para los métodos más recientes de configuración específica del dispositivo, comportamiento de firmware y detalles del fabricante consulte el sitio de TopShine https://www.gztopshine.com/ donde se publican la documentación oficial y las actualizaciones.
