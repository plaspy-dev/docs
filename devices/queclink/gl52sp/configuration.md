---
slug: /queclink/gl52sp/configuration
id: gl52sp-configuration
sidebar_label: Configuration
title: QuecLink - GL52SP Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for QuecLink GL52SP and how to point the device to Plaspy using shared server settings
keywords:
  - QuecLink GL52SP configuration
  - GL52SP setup
  - QuecLink GPS tracker configuration
  - Plaspy integration
  - GPS tracker server configuration
  - asset tracker setup
  - Sigfox asset tracker
  - QuecLink configuration guide
  - tracking platform setup
  - GPS platform integration
---

# QuecLink - GL52SP Configuration

This page provides public configuration context for using the QuecLink GL52SP with Plaspy. It collects the Plaspy server settings you will need and describes practical setup steps and example commands that are commonly used with QuecLink devices. Use this page as a focused reference for pointing a compatible device to the Plaspy platform and validating connectivity.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The GL52SP is a Sigfox asset tracker by design; however, some QuecLink devices and firmwares also accept SMS or GPRS style AT commands for configuration. Where public SMS configuration commands are available they are included below — verify applicability for your unit and firmware before applying settings.

## Configuration Overview

This configuration prepares the GL52SP to communicate with Plaspy so the device can report position and status to the Plaspy platform. The goal is to configure the device to send telemetry to Plaspy's global server endpoint and to validate that the tracker becomes visible in your Plaspy account.

- Point the tracker to the Plaspy server endpoint so location updates reach Plaspy
- Configure transport and server port that Plaspy uses for all devices
- Validate network connectivity and that the device appears in Plaspy
- Enable and verify required reporting intervals and alert inputs for monitoring
- Use example SMS AT commands when applicable to set APN, server, and reporting interval

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Confirm the device has power and is accessible for configuration
- Ensure the device is provisioned on a supported network for your region (Sigfox registration for GL52SP or cellular service if using SMS/GPRS configuration methods)
- Have access to the manufacturer configuration method you intend to use (SMS commands, USB tool, or vendor software)
- Know any required credentials or the device password (example default password shown below is queclink where applicable)
- Prepare APN information if using a GPRS configuration method (placeholders such as [apn], [apnu], [apnp] are used when applicable)
- A way to validate device reporting in Plaspy after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the tracker sends location and status updates to Plaspy's shared server endpoint so the device is visible and monitorable in the platform. Plaspy receives the incoming connection on the same port for all devices and automatically detects the tracker protocol to decode messages.

- The tracker reports to the Plaspy server endpoint d.plaspy.com or directly to IP 54.85.159.138
- All device connections use port 8888 on Plaspy
- Transport can be either UDP or TCP depending on device capability and configuration
- Plaspy automatically detects the tracker protocol and maps incoming data to the correct device type
- Once reporting is validated, Plaspy displays location and event data for operational monitoring

## Common Configuration Workflow

1. Access the official QuecLink manufacturer configuration method or software for your unit and firmware.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server/host field.
3. Set the port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if your device requires a transport selection.
5. Apply or save the configuration to the device and, if required, send any SMS commands or use the vendor tool to push settings.
6. Restart the device if the configuration method or firmware requires a reboot to apply settings.
7. Validate that the device reports into Plaspy and appears in your account or monitoring view.

## Example Configuration Commands

The following public example commands are provided as typical SMS AT style commands for QuecLink devices. They were published as an SMS-based setup sequence. Keep the order where shown; the first command restores factory settings and is optional only when required.

- Notes:
  - The sample device password in these commands is queclink and is shown as the default.
  - Placeholders such as [apn], [apnu], and [apnp] must be replaced with your cellular operator APN values when applicable.
  - These commands are public examples. Verify that your GL52SP firmware supports SMS AT configuration before sending.

1. (Optional) Restore factory settings
```
AT+GTRTO=queclink,4,,,,,,FFFF$
```

2. Set the time zone UTC-0
```
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

3. Set the operator APN (replace placeholders as needed)
```
AT+GTBSI=queclink,[apn],[apnu],[apnp],,,,,FFFF$
```

4. Set the GPRS server to Plaspy (server domain and IP both provided)
```
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```

5. Set the update interval to 60 seconds
```
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

6. Enable SOS button notification input 2
```
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

## Configuration Notes

- The GL52SP is a Sigfox asset tracker; confirm whether SMS or GPRS style SMS AT commands apply to your unit and firmware before use.
- Firmware revisions and hardware variants can change command support and behaviour; test on a single device before mass deployment.
- Choose TCP or UDP transport based on device capability. Plaspy supports both on port 8888 and will detect protocol automatically.
- Placeholders such as [apn], [apnu], and [apnp] must be filled with correct operator details when configuring cellular data.
- Prefer official QuecLink documentation and configuration tools for device-specific instructions and the most current command reference.

## Why Use Plaspy with This Configuration

Using Plaspy with the QuecLink GL52SP (or other compatible QuecLink devices) centralizes asset visibility, event reporting, and monitoring in a single platform. Pointing trackers to Plaspy's shared server endpoint simplifies deployment because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol to decode and present telemetry.

To learn more about Plaspy and how it handles device connections, visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references verify information on the manufacturer site https://www.queclink.com/. Device specific setup methods and firmware behavior can change over time so always confirm the current documentation before applying changes.
