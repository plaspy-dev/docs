---
slug: /topshine/vt111/configuration
id: vt111-configuration
sidebar_label: Configuration
title: TopShine - VT111 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador TopShine VT111 con los ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración TopShine VT111
  - Instalación TopShine VT111
  - VT111 Plaspy
  - Configuración rastreador GPS VT111
  - Configuración de rastreo de vehículos
  - Configuración de servidor del rastreador TopShine
  - Configuración del rastreador Plaspy
  - Configuración SMS rastreador GPS
  - Configuración de plataforma para rastreo de flotas
  - Configuración de plataforma de rastreo
---

# TopShine - VT111 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS vehicular TopShine VT111 con Plaspy. Se centra en los pasos prácticos y los comandos públicos usados para apuntar el VT111 al endpoint del servidor Plaspy, validar la conectividad y preparar el dispositivo para su visibilidad en la plataforma. Cuando existen comandos SMS públicos se mantienen aquí en formato legible para ayudar a instaladores e integradores a aplicar la configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT111 soporta métodos de configuración por SMS y GPRS en la documentación pública, por lo que esta guía incluye los comandos SMS y el flujo de trabajo común empleados en configuraciones públicas, recomendando siempre verificar con la documentación oficial de TopShine.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el VT111 para enviar datos de ubicación y eventos a Plaspy de forma confiable y confirmar que el dispositivo aparece en la plataforma. En unidades VT111 que usan configuración por SMS o GPRS, el procedimiento suele ajustar el APN, el endpoint del servidor, el transporte y el intervalo de reporte para que el rastreador pueda comunicarse con Plaspy.

- Configure el APN del dispositivo para que el rastreador establezca conectividad de datos GPRS y envíe telemetría a Plaspy.
- Establezca el servidor del dispositivo en el endpoint de Plaspy para que los reportes se dirijan a la plataforma.
- Seleccione el modo de transporte (UDP o TCP) si el firmware lo requiere y asegúrese de que esté configurado el puerto 8888.
- Aplique un intervalo de reporte o un disparador por distancia apropiado para que el dispositivo envíe actualizaciones.
- Valide el IMEI y el identificador del dispositivo para que Plaspy pueda asociar la unidad con su cuenta.
- Verifique que la unidad aparezca y reporte en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador. Use el dominio o la IP que acepte el firmware de su dispositivo y asegúrese de que el transporte coincida con la capacidad del equipo.

## Requisitos habituales antes de la configuración

- Una unidad VT111 energizada y accesible con la batería interna cargada o alimentación externa conectada.
- Una tarjeta SIM funcional con datos habilitados y el APN correcto del operador móvil.
- Acceso al IMEI del dispositivo y a la contraseña del equipo para la configuración por SMS (los comandos de ejemplo usan la contraseña pública por defecto 000000 según el ejemplo del fabricante).
- Capacidad para enviar y recibir SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible.
- Conocimiento de los valores APN del operador para completar los marcadores [apn], [apnu] y [apnp] cuando se requiera.
- Un plan para verificar que el rastreador aparece en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VT111 se configura para reportar datos de ubicación y eventos al endpoint y puerto compartido de Plaspy. Después de aplicar los valores de APN y servidor y habilitar el modo GPRS, el dispositivo abrirá una conexión con Plaspy y comenzará a enviar telemetría según su intervalo o reglas de disparo configuradas.

- El rastreador envía datos GPRS al endpoint y puerto de Plaspy para que la plataforma pueda ingerir los reportes de ubicación.
- Telemetría y alertas se entregan a Plaspy, donde la plataforma mapea el dispositivo por su IMEI o identificador configurado.
- El dispositivo puede configurarse para reportar por intervalo de tiempo o por distancia para controlar la frecuencia de actualizaciones.
- Información de eventos como movimiento, alarmas y cambios de alimentación puede reenviarse a Plaspy una vez que el dispositivo esté apuntando al endpoint compartido.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo en conexiones entrantes.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TopShine para el VT111, típicamente comandos SMS o la herramienta del proveedor recomendada para su firmware.
2. Confirme o ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 según lo que acepte el firmware del VT111.
3. Configure el puerto del servidor a 8888 en la configuración del dispositivo.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña que requiera la SIM del operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para que los cambios tengan efecto.
7. Valide que el dispositivo esté reportando a Plaspy y que aparezca en la plataforma revisando la actividad del equipo después del intervalo de reporte esperado.

## Comandos de configuración de ejemplo

El VT111 puede configurarse enviando comandos SMS. Los comandos de ejemplo a continuación se toman de ejemplos públicos del fabricante. La contraseña de dispositivo usada en los ejemplos es la pública por defecto 000000. Reemplace los marcadores y la contraseña según corresponda para su equipo.

1. Reseteo opcional inicial a valores de fábrica (use solo cuando sea necesario).
```text
W000000,990,099###
```

2. Establecer el ID del dispositivo. El ejemplo del fabricante usa los primeros 14 dígitos derivados del IMEI como cadena de id del dispositivo. Plaspy generalmente identifica dispositivos por su IMEI completo de 15 dígitos al registrarlos en la plataforma.
```text
W000000,010,<14 digit device id derived from IMEI>
```
- Nota: Reemplace \<14 digit device id derived from IMEI> con los primeros 14 dígitos del IMEI según indica el ejemplo del fabricante.

3. Configurar el APN del operador y el usuario y contraseña opcionales del APN. Reemplace [apn], [apnu] y [apnp] con los valores de su operador. apnu y apnp son opcionales y solo se requieren para algunos operadores.
```text
W000000,011,[apn][,[apnu],[apnp]]
```
- Explicación de los marcadores:
  - [apn] = nombre del APN del operador
  - [apnu] = nombre de usuario del APN (opcional)
  - [apnp] = contraseña del APN (opcional)

4. Establecer el servidor GPRS usando la IP pública de Plaspy y el puerto mostrado en el ejemplo del fabricante.
```text
W000000,012,54.85.159.138,8888
```

5. Comando alternativo de servidor usando el dominio de Plaspy si el firmware del dispositivo acepta nombres de dominio en lugar de IP. Use esto solo si su firmware o herramienta del proveedor lo confirman.
```text
W000000,012,d.plaspy.com,8888
```

6. Cambiar el dispositivo a modo GPRS para que use datos y se conecte al servidor.
```text
W000000,013,2
```

7. Establecer el intervalo de actualización. El ejemplo usa el valor público mostrado por el fabricante.
```text
W000000,014,6
```

8. Comando de verificación para solicitar el IMEI del dispositivo por SMS.
```text
W000000,601
```

Siga las indicaciones del fabricante al enviar comandos SMS. Reemplace la contraseña por defecto si su dispositivo ha sido reconfigurado desde el ajuste de fábrica.

## Notas de configuración

- El firmware del fabricante y el comportamiento de los comandos pueden variar según la revisión de hardware y la versión de firmware. Confirme qué comandos SMS acepta su firmware VT111 antes de un despliegue a gran escala.
- Los comandos de ejemplo del VT111 usan SMS para establecer APN y valores de servidor. Si tiene acceso a una herramienta de configuración del proveedor, esa herramienta puede ofrecer un flujo de trabajo más conveniente.
- Elija UDP o TCP según lo que soporte su firmware; el comportamiento puede diferir en retransmisiones y manejo de sesiones.
- Mantenga los marcadores de credenciales APN [apn], [apnu] y [apnp] y complételos con valores específicos del operador; algunos carriers requieren usuario y contraseña mientras que otros no.
- La contraseña por defecto 000000 aparece en el ejemplo público. Cambíela si su política de seguridad exige una contraseña diferente en los dispositivos.

## Por qué usar Plaspy con esta configuración

Usar el TopShine VT111 con Plaspy permite visibilidad centralizada de la ubicación y eventos de vehículos en una flota al apuntar el rastreador al endpoint y puerto compartido de Plaspy. Una vez que el VT111 esté configurado con el APN correcto y los ajustes del servidor Plaspy, el dispositivo podrá reportar ubicación, alarmas y estados a la plataforma, donde los equipos de operaciones pueden monitorear y actuar sobre datos en tiempo real.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos más recientes, el comportamiento del firmware y los detalles del fabricante en el sitio de TopShine https://www.gztopshine.com/ antes de realizar despliegues masivos o instalaciones críticas.
