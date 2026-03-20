---
slug: /topfly/solarguardx_200/configuration
id: solarguardx_200-configuration
sidebar_label: Configuration
title: TopFly - SolarGuardX 200 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TopFly SolarGuardX 200 for use with Plaspy tracking and fleet management
keywords:
  - TopFly SolarGuardX 200 configuration
  - SolarGuardX 200 setup
  - TopFly tracker configuration
  - Plaspy tracker setup
  - SolarGuardX 200 server configuration
  - SolarGuardX 200 GPS setup
  - SolarGuardX 200 SMS commands
  - SolarGuardX 200 APN settings
  - fleet tracking configuration
  - container tracker configuration
---

# TopFly - SolarGuardX 200 Configuration

This page documents the public configuration context for using the TopFly SolarGuardX 200 with Plaspy. It collects the practical settings you will use to point the device at Plaspy and summarizes the common manufacturer-side commands and workflow published for the SolarGuardX 200. The intent is to help installers, integrators, and fleet administrators prepare this tracker for live operation on Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The SolarGuardX 200 supports SMS and IP reporting methods and the example SMS commands below show the public, manufacturer-provided method to set time zone, APN, server address, and reporting interval using the device default password.

## Configuration Overview

This configuration prepares the SolarGuardX 200 to report location and event telemetry to Plaspy using the platform's shared endpoint and port. The goal is to ensure the tracker has the correct APN and server settings, a working transport selection, and a reporting interval appropriate for your monitoring needs so the device becomes visible and manageable in Plaspy.

- Set the device network APN and credentials so it can establish GPRS or cellular data.
- Point the tracker to Plaspy by configuring the server domain or IP and the required port.
- Select UDP or TCP transport if the device requires a transport choice, matching network constraints.
- Configure the reporting interval so position and event updates arrive at the cadence you need.
- Validate connectivity by checking the device appears in Plaspy and sends initial position and event messages.

## Plaspy Server Settings

When configuring SolarGuardX 200 for Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be selected on the device
- Plaspy automatically detects the tracker protocol when a device connects

Note that Plaspy uses the same port for all supported devices and protocol detection is handled server side to simplify device configuration.

## Typical Requirements Before Setup

- A charged device battery or external power so the tracker stays powered during configuration.
- A valid SIM with a data plan and the APN information from your mobile operator.
- Access to the SolarGuardX 200 configuration method recommended by the manufacturer (SMS or vendor tool).
- An SMS capable phone or management tool if using SMS-based configuration as shown below.
- Network coverage on the cellular bands supported by your device SKU.
- Device default password (manufacturer default shown below) or credentials to authenticate configuration commands.

## How This Tracker Connects to Plaspy

The SolarGuardX 200 reports location and event telemetry to the shared Plaspy server endpoint and port so your Plaspy account can display real-time location and alerts. The tracker can forward lock, tamper, and status events along with periodic position updates to the configured Plaspy endpoint.

- Device initiates data connection to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport may be UDP or TCP depending on device configuration and network conditions.
- Position reports and event notifications are sent to Plaspy for display, rules, and alerts.
- Plaspy automatically detects the incoming protocol and associates the device with your account once reporting begins.
- Use of APN and proper network credentials ensures the tracker can reach the Plaspy endpoint over cellular data.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for SolarGuardX 200 (SMS commands, vendor tool, or configuration portal).
2. Enter the Plaspy server endpoint using either d.plaspy.com or the server IP 54.85.159.138 as supported by the tool.
3. Set the port to 8888 as Plaspy uses the same port for all devices.
4. Choose UDP or TCP on the device if the tracker requires explicit transport selection.
5. Configure APN and network credentials so the device can register on the operator network.
6. Apply or save the configuration and restart the device if the device requires a reboot to apply changes.
7. Validate that the tracker reports to Plaspy by confirming the device appears in the platform and sending a test update or waiting for the first position report.

## Example Configuration Commands

The SolarGuardX 200 supports SMS-based configuration using the device password. The manufacturer-provided public SMS commands below use the default device password 0000. Send each command as a separate SMS to the device phone number. Preserve the placeholders and replace them with your operator values where indicated.

- Default device password used in these commands: 0000

1. Set the time zone to UTC 0
```text
GMT,0000,0#
```

2. Set the operator APN (replace placeholders with your APN values)
```text
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] = mobile network APN
- [apnu] = APN username if required by carrier, otherwise leave empty
- [apnp] = APN password if required by carrier, otherwise leave empty

3. Set the GPRS server to Plaspy using the server IP and port
```text
IP,0000,54.85.159.138 8888#
```
- You may alternatively use d.plaspy.com in manufacturer tools that accept domain names.

4. Set the position update interval to 60 seconds
```text
TIMER,0000,60:60:0:0#
```
- This example configures a periodic reporting interval; consult device docs for alternative timer formats.

These commands are presented in the public manufacturer format. If your tracker firmware or tool supports domain names, you may enter d.plaspy.com instead of the IP address. Plaspy supports both UDP and TCP transports on port 8888 and will detect the protocol automatically.

## Configuration Notes

- Firmware and hardware revisions may change SMS formats, command syntax, or supported placeholders; always check the device firmware notes.
- If the device requires a transport choice, test both UDP and TCP to match network behavior and firewall rules.
- SMS-based setup is commonly supported for SolarGuardX 200, but vendor tools or over the air methods may also be available and can simplify bulk provisioning.
- The device default password in the public commands is 0000; change device credentials after setup where possible to secure the device.
- Use the Plaspy server values exactly as listed to ensure the device connects correctly to Plaspy.

## Why Use Plaspy with This Configuration

Pairing the SolarGuardX 200 with Plaspy provides a straightforward path to get rugged, solar-powered asset tracking into your fleet or security workflows. With its tamper and lock event reporting combined with reliable GNSS position updates, the device feeds the Plaspy platform with the telemetry needed for geofence alerts, route auditing, and security monitoring.

To learn more about how Plaspy can centralize tracking and alerts for your SolarGuardX 200 devices visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references verify information on the manufacturer site https://www.topflytech.com/ since manufacturer setup methods and firmware behavior can change over time.
