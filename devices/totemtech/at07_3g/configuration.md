---
slug: /totemtech/at07_3g/configuration
id: at07_3g-configuration
sidebar_label: Configuration
title: Totemtech - AT07-3G Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Totemtech AT07 3G tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - Totemtech AT07 3G configuration
  - Totemtech AT07 3G setup
  - AT07 3G Plaspy
  - Plaspy GPS tracker configuration
  - Totemtech configuration guide
  - AT07 3G server configuration
  - vehicle tracking configuration
  - GPS tracker setup guide
  - GPRS tracker configuration
  - SMS tracker configuration
---

# Totemtech - AT07-3G Configuration

This page documents the public configuration context for using the Totemtech AT07-3G tracker with Plaspy. It focuses on the practical server settings and SMS commands that are commonly used to point this model at Plaspy so the device can report location and status data to our platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer steps and command formats can vary by firmware, hardware revision, installer preferences, and vendor tools. Where available this page includes the vendor SMS commands provided publicly for the AT07-3G so you can apply them when appropriate.

## Configuration Overview

The configuration process prepares the AT07-3G to communicate reliably with Plaspy and to appear in the platform for monitoring and reporting.

- Point the tracker to the Plaspy server endpoint so the device can send telemetry to the platform.
- Configure GPRS and APN details so the tracker has mobile connectivity for TCP or UDP reporting.
- Optionally perform a factory reset when setting up new installations or to clear previous settings.
- Set reporting intervals and acknowledgement options to control how frequently the device updates Plaspy.
- Verify device reporting in Plaspy after applying settings to confirm visibility and operational status.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AT07-3G. Plaspy requires the same port for all supported devices and detects the tracker protocol automatically.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered and accessible Totemtech AT07-3G device with the ability to receive SMS or use the manufacturer configuration tool.
- An active SIM with mobile data enabled and the correct APN settings for your mobile operator.
- Knowledge of the device default password where required for SMS commands or configuration tools; the public default in the example commands below is 000000.
- Access to the official manufacturer SMS command list or configuration software for your firmware revision.
- A checklist to validate connectivity and visibility in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The AT07-3G sends location and device data to Plaspy using standard GPRS reporting configured to the Plaspy server endpoint and port. Once the server address and transport are set, Plaspy will receive connection attempts and apply automatic protocol detection.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or the server IP 54.85.159.138.
- All devices report to port 8888 on Plaspy, regardless of model.
- The device can use either UDP or TCP as the transport depending on configuration; Plaspy accepts both.
- Plaspy automatically determines the protocol used by the tracker so protocol selection is supported but the platform will detect the active protocol on connection.
- After the tracker connects, Plaspy will process incoming messages and make the device visible for monitoring in the platform.

## Common Configuration Workflow

1. Access the official Totemtech configuration method for your unit such as SMS commands or the vendor software that matches your firmware.
2. Enter the Plaspy server using either the domain d.plaspy.com or the IP address 54.85.159.138 depending on the device configuration interface.
3. Set the server port to 8888 as Plaspy uses the same port for all devices.
4. Choose the transport protocol UDP or TCP if the device requires an explicit selection; Plaspy accepts both and will detect the protocol automatically.
5. Apply or save the configuration on the device and send any required confirmation commands.
6. Restart the tracker if the procedure or firmware requires a reboot to apply settings.
7. Validate in Plaspy that the device reports successfully and that location updates match expectations.

## Example Configuration Commands

The following SMS commands are public examples for the AT07-3G. These commands use the device SMS command format and the sample default device password 000000. Replace placeholders with your operator values where required. The commands are shown in the order published.

- Optional initial factory reset (use only if you need to clear previous settings)

```
*000000,007#
```

- Set the operator APN. Replace {{apn}}, {{apnu}}, and {{apnp}} with your mobile operator APN, username, and password as needed. If username or password are not required, use empty values or follow the device SMS rules.

```
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy using the public server IP and port 8888. The final value "1" in this command is vendor specific to the device command syntax and appears in the published sequence.

```
*000000,003,54.85.159.138,8888,1
```

- Enable ACK reporting if required by your setup

```
*000000,019,1#
```

- Set the update interval to 60 seconds in the example. Adjust the timing values per your reporting requirements and device capabilities.

```
*000000,60,60,0,60#
```

Notes on placeholders and password
- The example commands use the default password 000000 as shown in the public commands. If your device password differs, replace 000000 with the correct password.
- Placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your mobile operator APN settings. Keep the placeholders visible in documentation until replaced for your deployment.

## Configuration Notes

- The AT07-3G supports SMS based configuration as shown above; verify the exact SMS command syntax for your firmware revision before sending commands.
- Firmware and hardware revisions may alter command syntax, available parameters, or the need for rebooting after changes. Confirm with Totemtech documentation when possible.
- Choose UDP or TCP according to your network conditions or installer preference; Plaspy accepts both transports on port 8888 and will auto detect the protocol.
- Plaspy uses the same port 8888 for all supported devices which simplifies multi device deployments and server configuration.
- OTA firmware upgrade capability may be available for this model; follow manufacturer procedures to update firmware before a large deployment if needed.

## Why Use Plaspy with This Configuration

Using the Totemtech AT07-3G with Plaspy provides a straightforward path to bring device telemetry into a unified fleet or asset monitoring platform. By configuring the tracker to report to Plaspy's shared endpoint and port, organizations gain visibility into device location and status and can centralize alerts, history, and operational oversight.

To learn more about Plaspy and how it handles device onboarding and device data, visit https://www.plaspy.com. For device specific details, firmware updates, and the latest manufacturer commands, please verify current information at the Totemtech website http://www.totemtek.com/ as manufacturer setup methods and firmware behavior can change over time.
