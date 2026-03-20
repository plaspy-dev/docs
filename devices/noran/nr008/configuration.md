---
slug: /noran/nr008/configuration
id: nr008-configuration
sidebar_label: Configuration
title: Noran - NR008 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide to configure the Noran NR008 GPS tracker for use with Plaspy including SMS and GPRS server settings and example commands
keywords:
  - Noran NR008 configuration
  - NR008 setup Plaspy
  - Noran GPS tracker configuration
  - NR008 server configuration
  - NR008 GPRS setup
  - Noran NR008 SMS commands
  - NR008 Plaspy integration
  - Noran tracker setup guide
  - NR008 fleet tracking
  - Plaspy device configuration
---

# Noran - NR008 Configuration

This page covers the public configuration context for using the Noran NR008 tracker with the Plaspy platform. It explains the shared server settings Plaspy expects, describes the practical setup workflow for an NR008, and includes example SMS/GPRS commands that are commonly used to prepare the device for reporting to Plaspy. The NR008 supports SMS and GPRS configuration and uses a SIMCOM GSM/GPRS module for telemetry delivery; the sample commands below reflect publicly available manufacturer-style SMS commands and the device default password where shown.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the NR008. Exact manufacturer-side steps, available configuration tools, and menu locations may vary by firmware version, hardware revision, installation type, or vendor tool. Use the guidance below to prepare the device for Plaspy and consult the official Noran documentation for device-specific details.

## Configuration Overview

The goal of this configuration process is to prepare the NR008 to communicate reliably with the Plaspy platform so that location, alerts, and remote control commands flow to and from your account. Publicly available commands for the NR008 allow setting the operator APN, pointing the device to Plaspy server endpoints, switching the device to GPRS mode, and verifying current settings.

- Point the NR008 at the Plaspy server so GPRS telemetry is routed to Plaspy.
- Configure the cellular APN and GPRS mode so the device can connect to the internet.
- Verify device identity and settings via the NR008 status command before registering in Plaspy.
- Validate that the tracker is visible in Plaspy and that telemetry and events are received.
- Use SMS commands when direct software or USB configuration is not available on site.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888; choose the transport required by the device
- Plaspy automatically detects the tracker protocol when telemetry arrives

Note: All devices in Plaspy use the same port so you should configure the NR008 to report to port 8888 on the server above.

## Typical Requirements Before Setup

- A valid vehicle power connection or charged battery as required by the NR008 installation.
- A working SIM card with data enabled and the correct APN values from your mobile operator.
- Access to a phone capable of sending SMS to the tracker or the manufacturer configuration tool if available.
- Knowledge of the device password for configuration via SMS (the public example uses the default password 000000).
- Stable GSM/GPRS coverage at the installation location.
- Access to the manufacturer manual or vendor installation guide for wiring and peripheral setup.

## How This Tracker Connects to Plaspy

The NR008 sends location and event data to Plaspy either over GPRS data or via SMS depending on configuration and available connectivity. Once configured with the Plaspy server endpoint and port, the device will open a GPRS connection to the shared Plaspy endpoint and the platform will ingest the telemetry for display, alerts, and reporting.

- The tracker is configured to report telemetry to the Plaspy server domain or IP and port.
- Telemetry and alarms (SOS, geo-fence, overspeed, movement) are forwarded to Plaspy for alerting.
- Plaspy receives device messages and automatically detects the protocol used by the NR008.
- Remote commands and immobilizer functions can be issued via SMS or GPRS channel routed through the configured server workflow.
- Successful configuration enables the device to appear in Plaspy for real-time monitoring and history.

## Common Configuration Workflow

1. Access the official Noran configuration method for the NR008 (SMS commands or vendor software) as provided by the manufacturer or vendor.
2. Prepare the device with a working SIM card, ensure the APN is known, and confirm device power.
3. Enter the Plaspy server address in the device configuration as either d.plaspy.com or 54.85.159.138.
4. Set the server port to 8888; select UDP or TCP if the device requires a transport choice.
5. Apply or save the configuration on the tracker (via SMS confirmation or the vendor tool).
6. Restart the device if required by the device firmware to apply GPRS changes.
7. Validate the device reports to Plaspy by checking for incoming telemetry and using the NR008 status command to confirm server and GPRS connection state.

## Example Configuration Commands

The NR008 can be configured by sending SMS messages to the device. The public example commands below use the device password 000000 as the default password. Replace {{apn}} and optional placeholders with your operator values. Preserve the device password field and replace it if you have changed the default.

1. Set the operator APN
Send an SMS with the following format. Replace {{apn}} with your operator APN. If your operator requires APN username and password include {{apnu}} and {{apnp}} as shown.

```
A000000,012,{{apn}}
```

Optional variant with APN username and password:

```
A000000,012,{{apn}},{{apnu}},{{apnp}}
```

2. Set the GPRS server (point the device to Plaspy)
Send an SMS using the device password and the Plaspy server IP and port:

```
A000000,010,54.85.159.138,8888
```

You may replace the IP with the server domain when your device accepts domain names:

```
A000000,010,d.plaspy.com,8888
```

3. Switch the tracker to GPRS mode
Enable GPRS data reporting with this command:

```
A000000,011,1
```

4. Check current settings and device status
Use the verification/status command to read device info such as device Id, APN, server, port, GPRS status, GPRS connection status, and GSM signal:

```
A000000,004
```

Notes on placeholders and identifiers:
- 000000 is the public default device password in this example. If you changed the device password, replace 000000 with your device password in all commands.
- {{apn}} should be replaced with your mobile operator APN string.
- {{apnu}} and {{apnp}} are optional and represent APN username and APN password where required by the operator.
- To get the device Id after a status check, look for the first word starting with NR in the returned status message.

## Configuration Notes

- Firmware and region variations can change command syntax or available parameters; verify command formats against the currently installed firmware documentation.
- The NR008 supports SMS based configuration in public examples; use SMS when no direct software interface is available.
- Choose TCP or UDP according to your installation needs; both transports are supported for port 8888 but device behavior can vary by firmware.
- Confirm APN, username, and password with the mobile operator before sending APN setup SMS commands.
- Keep a record of the device password when you change it; lost passwords can complicate remote configuration.

## Why Use Plaspy with This Configuration

Configuring an NR008 to report to Plaspy provides centralized visibility into vehicle location, alarms, and operational events. For fleet operators, this integration streamlines alerting, historical reporting, and remote control workflows such as immobilization or SOS handling by routing NR008 telemetry into Plaspy for map-based monitoring and rule-based notifications.

To learn more about Plaspy and how Plaspy can manage NR008 telemetry and fleet workflows visit https://www.plaspy.com. Please verify the latest device specific setup steps, firmware behavior, and manufacturer details on the Noran website http://www.norantracker.com/ as specifications and command formats can change over time.
