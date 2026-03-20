---
slug: /thingsys/ts_g17hs/configuration
id: ts_g17hs-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17Hs Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys TS G17Hs para Plaspy con ajustes de servidor y comandos SMS
keywords:
  - Configuración ThingSys TS G17Hs
  - Instalación ThingSys TS G17Hs
  - Configuración TS G17Hs para Plaspy
  - Configuración servidor rastreador GPS
  - Guía instalación rastreador vehicular
  - Ajustes servidor Plaspy
  - Comandos SMS TS G17Hs
  - Configuración seguimiento de flotas
  - Rastreador protocolo GT06 CRX3
  - Configuración GPRS TS G17Hs
---

# ThingSys - TS-G17Hs Configuración

Esta página documenta el contexto público de configuración para usar el rastreador ThingSys TS-G17Hs con Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos SMS que se usan comúnmente para apuntar el dispositivo a Plaspy, y explica qué verificar antes de registrar el equipo en su cuenta Plaspy. Utilice esta guía como referencia práctica para la preparación de la integración; siempre contraste con la documentación del fabricante para comportamientos específicos según la versión de firmware.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TS-G17Hs admite configuración por SMS e informes por GPRS; los comandos SMS de ejemplo y la contraseña por defecto del dispositivo aparecen más abajo para ayudarle a configurar el rastreador para Plaspy.

## Resumen de configuración

El objetivo al configurar el TS-G17Hs para Plaspy es preparar el dispositivo para que envíe reportes por GPRS o SMS al servidor compartido de Plaspy, de modo que el equipo aparezca en la plataforma y transmita ubicación y telemetría del vehículo de forma confiable. La configuración típica incluye APN, endpoint del servidor, transporte y cualquier calibración inmediata necesaria para la instalación.

- Configure el APN del operador móvil y, si aplica, las credenciales del APN para que GPRS pueda conectarse.
- Apunte el dispositivo al dominio o IP del servidor Plaspy y al puerto compartido que utiliza Plaspy.
- Seleccione el modo de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Valide la conectividad y la detección del protocolo para que Plaspy reciba los primeros reportes.
- Guarde la configuración y reinicie o corte la alimentación para aplicar los ajustes antes de la validación final.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporta transporte UDP o TCP; configure el transporte que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe especificar el puerto 8888 para este equipo

## Requisitos previos antes de la configuración

- Una unidad TS-G17Hs alimentada y accesible, con acceso al número SMS de configuración o a la herramienta del fabricante
- Una SIM celular válida con datos habilitados y la información APN correcta del operador móvil
- Un teléfono capaz de enviar SMS al rastreador o acceso a la herramienta oficial de configuración ThingSys cuando esté disponible
- Conocimiento de la contraseña por defecto del equipo si se requiere autenticación por SMS (la contraseña pública de ejemplo que se muestra aquí es 123456)
- Verificaciones básicas de instalación como alimentación asegurada, colocación de la antena y cableado físico de ignición cuando se requiera telemetría como ACC

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el TS-G17Hs envía ubicación y telemetría al endpoint del servidor compartido de Plaspy en el puerto de Plaspy para que la plataforma ingiera y muestre datos en tiempo real e históricos. Plaspy interpreta los protocolos soportados y expone ignición, SOS y registros almacenados por zonas sin cobertura a través de su interfaz de gestión de flotas.

- El dispositivo envía paquetes de seguimiento GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy acepta transporte UDP o TCP y detectará el protocolo del rastreador automáticamente
- Si se configura, SMS puede usarse como respaldo para sondeos o para cambiar el modo de protocolo del equipo
- Los mensajes almacenados por pérdida de cobertura se suben una vez que se restablece la conectividad GPRS, preservando el historial de eventos
- La telemetría del dispositivo como estado de ignición y SOS puede reenviarse a Plaspy para alertas y flujos operativos

## Flujo de configuración típico

1. Acceda al método de configuración oficial de ThingSys, normalmente comandos SMS o la herramienta del fabricante, y confirme el número telefónico del dispositivo o el método de conexión.
2. Configure el APN del operador y, si aplica, el usuario y la contraseña del APN usando los comandos SMS del dispositivo o la herramienta.
3. Ingrese el endpoint del servidor Plaspy especificando ya sea d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto a 8888 para Plaspy y, si el equipo lo requiere, seleccione UDP o TCP como transporte.
5. Aplique o guarde la configuración y, si el dispositivo lo exige, reinicie el rastreador o corte la alimentación.
6. Valide que el dispositivo reporte a Plaspy verificando la primera actualización de ubicación o usando el comando de verificación del equipo.
7. Si el dispositivo no reporta, vuelva a revisar los datos APN, las respuestas de confirmación de los comandos SMS y las notas de solución de problemas del fabricante.

## Comandos de configuración de ejemplo

El TS-G17Hs puede configurarse mediante mensajes SMS. Los comandos de muestra a continuación se extraen de ejemplos públicos del fabricante. La contraseña del dispositivo usada en estos ejemplos es 123456 y es la predeterminada que aparece en el contenido público. Reemplace los marcadores con los valores específicos del operador donde corresponda.

- Reinicio de fábrica opcional inicial (usar sólo cuando necesite un restablecimiento completo)
```text
FORMAT
```

- Establecer el APN del operador (reemplace [apn] por el APN de su operador)
```text
apn123456 [apn]
```

- Establecer el usuario del APN (reemplace [apnu] por el usuario del APN si es requerido)
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN (reemplace [apnp] por la contraseña del APN si es requerida)
```text
apnpasswd123456 [apnp]
```

- Configurar el servidor GPRS con la IP y el puerto de Plaspy (el ejemplo público usa la IP)
```text
ip54.85.159.138 8888
```

Notas sobre los comandos
- Si prefiere usar el dominio de Plaspy, configure el dispositivo para usar d.plaspy.com cuando el firmware del equipo soporte nombres de dominio en lugar de una IP.
- Los marcadores [apn], [apnu] y [apnp] deben sustituirse por los valores de su operador móvil al enviar los SMS.
- Después de enviar cada comando SMS, el dispositivo suele responder con un mensaje de confirmación; supervise las respuestas SMS del equipo para confirmar el éxito.

- Comando de verificación para revisar los ajustes actuales
```text
CXZT
```

Envíe los comandos SMS al número de la SIM instalada en el TS-G17Hs. Si la configuración por SMS no está disponible para su unidad o firmware, utilice la herramienta de configuración ThingSys o siga la guía oficial del fabricante.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis o el comportamiento de los comandos; los ejemplos SMS aquí son muestras públicas y pueden diferir según el firmware.
- El equipo soporta tanto informes UDP como TCP; elija el transporte que prefiera su despliegue. Plaspy detectará el protocolo del rastreador automáticamente una vez que lleguen los reportes.
- La configuración por SMS es comúnmente soportada para el TS-G17Hs; utilice SMS cuando se requiera acceso remoto o cuando las herramientas de instalación no estén disponibles.
- Tenga presente la información de la contraseña por defecto; cambie la contraseña si su política de seguridad lo recomienda luego de la configuración inicial.
- Al establecer el servidor, puede usar el dominio d.plaspy.com o la IP 54.85.159.138. Siempre especifique el puerto 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.

## Por qué usar Plaspy con esta configuración

Usar el TS-G17Hs con Plaspy ofrece un camino sencillo para capturar ubicación del vehículo, estado de ignición, alertas SOS y registros almacenados por zonas sin cobertura en una sola plataforma de gestión de flotas. Los ajustes de servidor compartidos de Plaspy simplifican el alta de equipos y hacen que las implementaciones sean consistentes en flotas mixtas.

Para conocer más sobre Plaspy y ver las funciones de la plataforma que complementan la telemetría del TS-G17Hs, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e instrucciones oficiales, verifique los detalles en el sitio de ThingSys https://www.thingsys.com/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
