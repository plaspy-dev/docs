---
slug: /topshine/tlv01/configuration
id: tlv01-configuration
sidebar_label: Configuration
title: TopShine - TLV01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador TopShine TLV01 para Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración TopShine TLV01
  - Instalación TopShine TLV01
  - Configuración servidor TopShine TLV01
  - Rastreador GPS TopShine Plaspy
  - Configuración SMS TLV01
  - Ajustes APN TLV01
  - Configuración GPRS TLV01
  - Documentación TopShine
  - Seguimiento de flota TopShine TLV01
  - Configuración inmovilizador TLV01
---

# TopShine - TLV01 Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopShine TLV01 Mini Hide con la plataforma Plaspy. Resume los ajustes prácticos y los comandos SMS públicos que se emplean para preparar el equipo en modo GPRS hacia Plaspy, y señala el endpoint del servidor Plaspy al que el rastreador debe reportar para lograr visibilidad en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía combina los comandos SMS públicos del TLV01 con los detalles del servidor Plaspy para ayudar a instaladores y gestores de flota a completar una integración estándar.

## Resumen de la configuración

Este proceso prepara al TLV01 para enviar datos de ubicación y eventos a Plaspy por GSM/GPRS y, cuando está disponible, usar SMS como respaldo. Los comandos y ajustes públicos que se muestran a continuación se centran en definir la identidad del equipo, las credenciales APN, la dirección y puerto del servidor GPRS, y activar el reporte por GPRS para que el rastreador aparezca en Plaspy.

- Configure el APN del TLV01 y, si aplica, las credenciales de usuario y contraseña para que el dispositivo establezca conexión de datos GPRS.
- Apunte el equipo al endpoint del servidor Plaspy para que la telemetría se entregue a la plataforma.
- Elija el transporte (UDP o TCP) si el dispositivo requiere selección y establezca el puerto común que usa Plaspy.
- Valide la identidad del dispositivo y el intervalo de reporte para que Plaspy pueda enlazar la telemetría con el registro correcto.
- Verifique la conectividad desde el equipo hacia Plaspy y confirme que el dispositivo aparece en el panel de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados en la plataforma y detecta el protocolo del rastreador de forma automática.

## Requisitos típicos antes de la configuración

- Una unidad TLV01 con batería o alimentación y acceso a su cableado o interfaz de instalación.
- Una tarjeta SIM válida habilitada para GPRS/datos y SMS según lo requiera el rastreador y el APN.
- El número IMEI del dispositivo disponible (se usa para configurar la identidad).
- Acceso al método oficial de configuración TopShine o a los comandos SMS del TLV01.
- APN, nombre de usuario APN y contraseña APN del operador móvil que provee la SIM.
- Un método para enviar comandos SMS al equipo (si va a usar configuración vía SMS).

## Cómo se conecta este rastreador a Plaspy

El TLV01 se conecta a Plaspy principalmente enviando datos de ubicación y eventos por GSM/GPRS al endpoint configurado de Plaspy en d.plaspy.com (54.85.159.138) puerto 8888. SMS permanece disponible para configuración por comandos y como respaldo cuando esté habilitado. Una vez configurado, Plaspy procesa la telemetría entrante para que el dispositivo sea visible en mapas, se generen alertas y se habiliten controles remotos (por ejemplo acciones de inmovilizador) donde estén soportados.

- El TLV01 reporta posición y eventos al endpoint y puerto compartido de Plaspy.
- Plaspy recibe la telemetría y determina automáticamente el protocolo del rastreador para su correcto procesamiento.
- Las alarmas y eventos del rastreador (por ejemplo geocerca, remolque o exceso de velocidad) se reenvían a Plaspy para notificaciones.
- El dispositivo puede controlarse de forma remota mediante funciones de Plaspy que dependen del reporte hacia la plataforma.
- SMS se utiliza para la configuración y para consultar el IMEI o cambiar ajustes cuando sea necesario.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del TopShine TLV01 o a la documentación para confirmar el formato correcto de los comandos SMS o la herramienta correspondiente a su firmware.
2. Prepare las credenciales APN para la SIM y tenga a mano el IMEI del TLV01 para configurar la identidad.
3. Ingrese la dirección del servidor Plaspy indicando el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración del equipo.
4. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).
5. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador; Plaspy detectará el protocolo automáticamente.
6. Aplique o guarde la configuración y reinicie el equipo si el rastreador o el firmware requieren un reinicio para aplicar cambios.
7. Valide que el TLV01 reporte a Plaspy y que aparezca en el mapa y en la telemetría de la plataforma, y confirme que se reciben alarmas o reportes periódicos.

## Ejemplos de comandos de configuración

El TLV01 soporta configuración vía SMS. Los siguientes comandos SMS públicos se incluyen en la documentación del TLV01. La contraseña por defecto del dispositivo usada en estos ejemplos es 000000. Reemplace los marcadores de posición como IMEI, [apn], [apnu], y [apnp] por los valores de su equipo.

- Reinicio a configuración de fábrica opcional (usar solo si necesita restaurar valores de fábrica):
```text
W000000,990,099###
```

- Establecer el ID del dispositivo (usar los primeros 14 dígitos del IMEI según indica el fabricante):
```text
W000000,010,<first 14 digits of IMEI>
```
Nota: La referencia del TLV01 indica usar los primeros 14 dígitos del IMEI para el ID del dispositivo. Mantenga el IMEI completo disponible para el mapeo en la plataforma.

- Configurar el APN del operador (use [apn] y opcionalmente [apnu] y [apnp] para usuario y contraseña):
```text
W000000,011,[apn]{{apnu ? ',' + [apnu] : ''}}{{apnp ? ',' + [apnp] : ''}}
```
Explicación: [apn] es el APN del operador móvil. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN. Envíe una cadena separada por comas con APN, luego usuario y luego contraseña si su operador los requiere.

- Configurar el servidor GPRS hacia Plaspy usando la IP y el puerto proporcionados:
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el dispositivo al modo de reporte GPRS (el comando establece el modo GPRS; el valor 2 comúnmente indica GPRS en muchos dispositivos TopShine):
```text
W000000,013,2
```

- Establecer el intervalo de actualización (ejemplo usa valor 6 según configuración pública):
```text
W000000,014,6
```

- Verificar el IMEI del dispositivo (solicitar IMEI vía SMS):
```text
W000000,601
```

Importante: Preserve la contraseña inicial del dispositivo (por defecto 000000) al enviar comandos. Reemplace la contraseña si ya la ha cambiado. Si una variante de fabricante o firmware usa una sintaxis ligeramente distinta, siga la documentación oficial de TopShine.

## Notas de configuración

- Las variantes de firmware y las versiones regionales pueden cambiar la sintaxis y el comportamiento de los comandos; siempre confirme los comandos con la documentación del firmware actual de la unidad.
- El TLV01 soporta configuración por SMS como se muestra arriba, lo cual resulta útil para instaladores sin acceso directo a una herramienta de configuración.
- Elija TCP o UDP según la preferencia del instalador y las condiciones de red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Plaspy usa un único puerto (8888) para todos los dispositivos; apunte el equipo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para entregar la telemetría.
- Asegúrese de ingresar correctamente las credenciales APN; un APN incorrecto o faltante impedirá la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Usar el TLV01 con Plaspy ofrece una solución de rastreo compacta y discreta que integra reportes GPRS y SMS en una sola plataforma para monitoreo de flotas y activos. Al configurar el equipo para reportar a d.plaspy.com (54.85.159.138) en el puerto 8888, el TLV01 envía posiciones y eventos de alarma que Plaspy procesa y presenta para monitoreo en tiempo real, reproducción histórica y control remoto del inmovilizador donde esté soportado.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes del TLV01, notas de firmware y detalles del fabricante, verifique la información en el sitio de TopShine https://www.gztopshine.com/.
