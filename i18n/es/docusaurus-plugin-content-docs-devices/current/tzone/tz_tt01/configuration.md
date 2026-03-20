---
slug: /tzone/tz_tt01/configuration
id: tz_tt01-configuration
sidebar_label: Configuration
title: TZone - TZ-TT01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TZone TZ-TT01 para enviar datos de temperatura a Plaspy
keywords:
  - TZone TZ-TT01
  - Configuración TZ-TT01
  - Configuración transmisor de temperatura TZone
  - Configuración Plaspy
  - Ajustes de servidor Plaspy
  - Guía de configuración de dispositivo
  - Comandos SMS de configuración
  - Configuración de servidor GPRS
  - Transmisor para monitoreo de temperatura
  - Compatibilidad de rastreador con Plaspy
---

# TZone - TZ-TT01 Configuration

Esta página documenta el contexto público de configuración para usar el TZone TZ-TT01 con Plaspy. Se enfoca en los ajustes y comandos prácticos y compatibles que permiten preparar el dispositivo para reportar datos de temperatura a la plataforma Plaspy. Utilice esta guía junto con la documentación del fabricante para detalles específicos del dispositivo y el comportamiento de la versión de firmware más reciente.

Plaspy emplea valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TZ-TT01 puede configurarse con los comandos que se muestran más abajo cuando el dispositivo los soporta; siga las herramientas del fabricante o el flujo de comandos SMS según corresponda.

## Resumen de configuración

El objetivo de la configuración es permitir que el TZ-TT01 envíe sus lecturas de temperatura a Plaspy de forma fiable. En dispositivos que admiten configuración por GPRS/SMS, esto normalmente implica establecer parámetros de red, el intervalo de reporte y el endpoint del servidor de Plaspy para que el equipo pueda iniciar sesiones de datos hacia la plataforma.

- Configure el APN del operador y, si es necesario, el usuario y contraseña de APN para que el dispositivo pueda establecer conexión GPRS.
- Ajuste el intervalo de reporte para que el dispositivo envíe datos con la cadencia deseada.
- Direccione el dispositivo al endpoint del servidor Plaspy (dominio o IP) y use el puerto compartido de Plaspy para entregar telemetría.
- Active GPRS o el modo de reporte del dispositivo para que el transmisor empiece a enviar datos de temperatura a Plaspy.
- Verifique que el dispositivo sea visible y reporte en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: support for UDP or TCP on port 8888 depending on device transport selection  
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los endpoints públicos de Plaspy que debe usar al configurar el TZ-TT01 para reportar a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo correcto.

## Requisitos previos

- Confirme que el TZ-TT01 tenga la batería interna cargada o la alimentación DC 5V externa requerida conectada.
- Si va a usar configuración por SMS o GPRS, asegúrese de que el rastreador tenga una tarjeta SIM válida y servicio de datos activo para el APN del operador que piensa utilizar.
- Obtenga acceso al método oficial de configuración del fabricante, como comandos SMS, la aplicación del proveedor o la herramienta de configuración.
- Asegúrese de contar con el APN correcto, las credenciales opcionales de APN (usuario y contraseña) y de entender el intervalo de actualización necesario para su caso de uso.
- Tenga listos los valores del servidor Plaspy: d.plaspy.com (o 54.85.159.138) y el puerto 8888, y decida si utilizar UDP o TCP si el dispositivo requiere elegir.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TZ-TT01 transmite las mediciones de temperatura al endpoint de Plaspy para que la plataforma registre, visualice y genere alertas sobre los datos del sensor. La conexión se establece contra el endpoint y puerto compartidos de Plaspy, y Plaspy gestiona la interpretación del protocolo.

- El rastreador utiliza la configuración GPRS para alcanzar el endpoint de Plaspy.
- Los reportes del dispositivo se envían a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Elija UDP o TCP en el dispositivo si se solicita; Plaspy acepta ambos y detectará el comportamiento del protocolo automáticamente.
- La frecuencia de reporte se controla por el intervalo de actualización del dispositivo para que Plaspy reciba actualizaciones periódicas de temperatura.
- Una vez conectado y autenticado en la plataforma, la telemetría del dispositivo será visible en Plaspy para monitoreo y gestión de eventos.

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante proporcionado por TZone (comandos SMS, aplicación del proveedor o herramienta de configuración).
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP si el dispositivo solicita elegir el transporte y guarde la selección.
5. Configure el APN del operador y las credenciales opcionales para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinícielo o corte y restablezca la alimentación si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy revisando la visibilidad del equipo y la telemetría reciente en la plataforma Plaspy.

Si su dispositivo admite comandos por SMS, incluya ese paso en el punto 1 y siga el orden de comandos que recomiende el fabricante.

## Ejemplos de comandos de configuración

El TZ-TT01 puede configurarse por SMS usando los siguientes comandos públicos. Envíe estos SMS desde un número autorizado conforme a las instrucciones del fabricante y conserve los marcadores de posición donde correspondan.

1. Configurar el APN del operador. Si sólo se requiere el APN:
```
*000000,011,[apn]#
```
Si el APN requiere usuario y contraseña, incluya los marcadores opcionales:
```
*000000,011,[apn],[apnu],[apnp]#
```
- [apn] = su APN del operador móvil
- [apnu] = usuario de APN (opcional)
- [apnp] = contraseña de APN (opcional)

2. Establecer el intervalo de actualización a 60 segundos:
```
*000000,018,60,999#
```
- Esto define el intervalo de reporte; ajuste el valor numérico según las indicaciones del fabricante y sus necesidades.

3. Establecer el servidor GPRS a la IP y puerto de Plaspy:
```
*000000,015,0,54.85.159.138,8888#
```
- Puede reemplazar la IP por d.plaspy.com si el dispositivo acepta nombres de dominio en esta cadena de comando.

4. Activar GPRS / modo de reporte:
```
*000000,016,1#
```
- Este comando habilita el modo GPRS para que el dispositivo comience a enviar datos al servidor configurado.

Conserve el orden de comandos cuando el fabricante indique que el orden importa. Si su hardware acepta nombres de dominio en lugar de IP, usar d.plaspy.com puede ser más robusto frente a cambios futuros de IP.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los campos de configuración disponibles; confirme siempre la sintaxis con la documentación más reciente del fabricante.
- Algunos dispositivos aceptan un dominio (d.plaspy.com) mientras que otros requieren una IP; si el equipo acepta ambos, se recomienda usar d.plaspy.com.
- Elija UDP o TCP según las indicaciones del dispositivo; Plaspy acepta ambos y detectará automáticamente el protocolo al conectarse.
- La configuración vía SMS está soportada por los comandos públicos indicados arriba; si dispone de software del proveedor o una herramienta de configuración, esta podría ofrecer los mismos ajustes mediante una interfaz gráfica.
- Mantenga un registro de los cambios de configuración y pruebe la conectividad después de aplicar los ajustes para confirmar la visibilidad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el TZ-TT01 permite centralizar la telemetría de temperatura de transmisores distribuidos en una única plataforma para monitoreo, alertas y análisis histórico. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy garantiza que los datos se entreguen de forma consistente y que Plaspy pueda interpretar automáticamente el protocolo del dispositivo al conectarse.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento del firmware y los detalles más recientes del fabricante, verifique la información actual en el sitio oficial de TZone http://www.tzonedigital.com/ ya que los flujos de trabajo y el firmware pueden cambiar con el tiempo.
