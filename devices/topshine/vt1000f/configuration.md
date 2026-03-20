---
slug: /topshine/vt1000f/configuration
id: vt1000f-configuration
sidebar_label: Configuration
title: TopShine - VT1000F Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine VT1000F showing Plaspy server settings and SMS commands for GPRS and SMS setup
keywords:
  - TopShine VT1000F configuration
  - TopShine VT1000F setup
  - VT1000F Plaspy setup
  - VT1000F server configuration
  - VT1000F GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracker VT1000F
  - VT1000F SMS commands
  - VT1000F GPRS configuration
  - fleet tracking VT1000F
---

# TopShine - VT1000F Configuration

This page documents the public configuration context for using the TopShine VT1000F with Plaspy. It covers the Plaspy server settings you must apply to the device, an outline of typical setup steps, and the publicly available SMS commands included in manufacturer guidance. Where applicable this guide preserves original placeholders and example commands so you can adapt them to your installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware revision, hardware revision, installation type, and vendor tools. The VT1000F supports GPRS and SMS configuration methods; the manufacturer provides SMS commands and a default device password of 000000 in the public configuration workflow shown below.

## Configuration Overview

The configuration process prepares the VT1000F to communicate reliably with Plaspy, verifies connectivity, and enables visibility of the unit in the platform. Public commands from the manufacturer show an SMS-based setup option; alternatively you may use the official TopShine configuration software or provisioning tool if available.

- Configure the device network endpoint to point at the Plaspy server so GPRS messages arrive in the platform.
- Apply the operator APN and data settings so the VT1000F can establish a GPRS session.
- Switch the device to GPRS mode and confirm transport settings (TCP or UDP) if the device requires a transport selection.
- Validate the device IMEI and identifier so Plaspy can map the unit correctly.
- Confirm the device is reporting location and event messages to Plaspy after applying settings.
- Use the manufacturer SMS commands or configuration tool depending on your preferred provisioning method.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

These values are the public Plaspy endpoint settings to use when configuring the VT1000F. All devices in Plaspy use the same port and Plaspy will automatically detect the device protocol.

## Typical Requirements Before Setup

- A powered VT1000F with access to the unit IMEI and any required wiring for power and ignition monitoring.
- An active SIM card with data enabled and the correct APN for the mobile operator.
- Ability to send SMS messages to the device or access to the official TopShine configuration utility as provided by the vendor.
- Knowledge of the device default password 000000 when using SMS commands (present in public manufacturer guidance).
- Confirmed Plaspy server settings d.plaspy.com or the IP 54.85.159.138 and port 8888 are available from your network.
- A test environment in Plaspy to verify the device reports correctly before wide deployment.

## How This Tracker Connects to Plaspy

The VT1000F is configured to report location and event data to the shared Plaspy server endpoint and port so vehicle position, telemetry, and alarms appear in the Plaspy platform. Depending on configuration, the device will use GPRS data sessions (TCP or UDP) or fallback SMS reporting for key events.

- The tracker sends GPRS data to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the device protocol and maps incoming messages to the correct tracker type.
- Location and event updates from the VT1000F—such as iButton driver events, SOS, or immobilizer state—are forwarded into Plaspy for monitoring and alerting.
- The device can be validated by confirming messages arrive at the Plaspy endpoint and appear in the platform.
- Where SMS commands are supported, configuration and diagnostics may be performed via SMS as part of the setup flow.

## Common Configuration Workflow

1. Access the official TopShine configuration method or SMS interface provided by the vendor or installer documentation.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 in the device configuration.
4. Choose the transport protocol UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration and, if required by the device, restart or power cycle the VT1000F.
6. Validate that the device reports location and events to Plaspy by checking the unit in the Plaspy platform.
7. If using SMS-based setup, send the manufacturer commands in the order recommended and confirm responses from the device.

## Example Configuration Commands

The manufacturer provides SMS commands for public configuration. The following commands are the public examples; replace placeholders where noted. The device default password shown in public guidance is 000000.

- Reset to factory settings (optional initial step)
```text
W000000,990,099###
```

- Set the device ID
  - The manufacturer guidance indicates using the first 14 digits from the device IMEI when setting the internal device Id. Note that Plaspy uses the IMEI (full 15 digits) as the platform identifier.
```text
W000000,010,12345678901234
```
  Replace the digits above with the first 14 digits of your device IMEI.

- Set the operator APN
  - Use your mobile operator APN. Optional APN username and password may be supplied if required by your operator. The placeholders below are preserved from the public guidance.
```text
W000000,011,[apn],[apnu],[apnp]
```
  - [apn] = operator APN
  - [apnu] = APN username (optional)
  - [apnp] = APN password (optional)

- Set the GPRS server to Plaspy (public IP and port shown)
```text
W000000,012,54.85.159.138,8888
```

- Switch the device to GPRS mode
```text
W000000,013,2
```

- Set the update interval (example value)
```text
W000000,014,6
```

- Query device IMEI (verification command)
```text
W000000,601
```

Notes about these commands:
- Prefixing with the device password 000000 follows the public examples. If your device password was changed, use the current password instead of 000000.
- Keep the command order when first provisioning: factory reset (optional), set device id, set APN, set server, switch to GPRS, then set reporting interval.
- The APN command preserves placeholders; replace them with your operator values when sending the SMS.

## Configuration Notes

- Firmware and hardware revisions can change available commands and exact SMS syntax; always confirm command syntax against the current TopShine documentation or vendor release notes.
- The VT1000F supports both SMS and GPRS based configuration in public guidance; SMS provisioning is useful during installation where data connectivity is not yet established.
- Choose UDP or TCP based on your installation requirements; Plaspy supports both and will auto detect the protocol, but you should set the transport consistent with local network policies.
- All devices in Plaspy use the same port 8888 for server connectivity and Plaspy automatically detects tracker protocols for incoming connections.
- When using APN placeholders, ensure you supply the correct APN, username, and password for the SIM in use to establish a GPRS session.

## Why Use Plaspy with This Configuration

Configuring the VT1000F to report to Plaspy gives operators a consolidated platform for real time tracking, driver identification events, SOS alerts, and telemetry reporting. The VT1000F five SIM failover and driver iButton integration help maintain continuous connectivity and map trips to drivers, while Plaspy ingests the data for mapping, alerts, and historical analysis.

Learn more about Plaspy and how to apply these server settings on the Plaspy website https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify the official TopShine documentation at https://www.gztopshine.com/ as vendor guidance can change over time.
