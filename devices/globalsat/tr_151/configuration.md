---
slug: /globalsat/tr_151/configuration
id: tr_151-configuration
sidebar_label: Configuration
title: GlobalSat - TR-151 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat TR-151 GPS tracker integration with Plaspy including server settings and SMS command examples
keywords:
  - GlobalSat TR-151 configuration
  - TR-151 setup
  - TR-151 Plaspy setup
  - GlobalSat tracker configuration
  - TR-151 server configuration
  - Plaspy GPS tracker setup
  - vehicle tracking TR-151
  - asset tracker TR-151
  - GPS tracker configuration guide
  - Plaspy device integration
---

# GlobalSat - TR-151 Configuration

This page documents the public configuration context for using the GlobalSat TR-151 with Plaspy. It describes the practical server settings and the publicly available SMS command format used to point the TR-151 to Plaspy for live tracking and reporting. Use this guide to understand what needs to be applied on the device side before the tracker is visible in the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer setup steps for the TR-151 can vary with firmware revision, installation type, or vendor tools, so follow the general guidance here and confirm device-specific instructions with GlobalSat documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the TR-151 to communicate reliably with Plaspy and to validate that the device is visible in the platform. For TR-151 devices, a common public method is to send the tracker an SMS configuration command that sets the device APN and server endpoint.

- Configure the TR-151 to send its GPRS reporting to the Plaspy server endpoint.
- Provide the device with correct APN credentials so it can open a data session.
- Ensure the device uses the shared Plaspy port and the correct transport type if required.
- Validate connectivity and confirm the device appears in Plaspy before final installation.
- Optionally reboot or restart the tracker after applying settings to ensure changes take effect.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically, so the device must be configured to report to the address and port above using either UDP or TCP where applicable.

## Typical Requirements Before Setup

- A charged TR-151 device with a known IMEI number.
- An active SIM card with data and SMS capability and correct APN details.
- Access to the GlobalSat SMS configuration method or the manufacturer configuration tool used for your model.
- A reliable phone or SMS gateway to send configuration messages to the device.
- Knowledge of the APN, APN username, and APN password for the SIM operator.
- Access to Plaspy credentials or account to confirm the device appears in the platform after setup.

## How This Tracker Connects to Plaspy

When configured, the TR-151 sends location and status data to the Plaspy shared server endpoint and port so the device becomes visible and reportable inside the Plaspy platform. Plaspy then interprets the incoming protocol automatically and presents location, connectivity, and event data to the user.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138).
- All TR-151 devices should use the common Plaspy port 8888 for reporting.
- The device may use UDP or TCP transport depending on the device or firmware setting.
- Once data reaches Plaspy, the platform automatically detects the tracker protocol and processes incoming messages.
- Successful reporting enables location visibility, event monitoring, and operational oversight within Plaspy.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for the TR-151, typically SMS commands or the manufacturer configuration tool.
2. Enter the Plaspy server domain d.plaspy.com or server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Provide APN, APN username, and APN password placeholders as required by the device configuration.
6. Apply or save the configuration on the tracker and, if required, restart or reboot the device.
7. Validate that the device reports to Plaspy by checking device status inside the Plaspy platform.

If you use SMS-based configuration, follow the manufacturer command format exactly and include the required checksum tokens where indicated.

## Example Configuration Commands

The TR-151 can be configured by sending SMS commands. The manufacturer example includes placeholder tokens that must be replaced before sending. The public command templates extracted from the manufacturer configuration are shown below.

Setup command (set APN and Plaspy server):
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command (optional, use when required to apply changes):
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notes about the placeholders and values:
- {{imei}}: Replace with the device IMEI number.
- [apn]: Replace with the mobile operator APN for the SIM card.
- [apnu]: Replace with the APN username if the operator requires it; leave blank if not required.
- [apnp]: Replace with the APN password if the operator requires it; leave blank if not required.
- {{checksum}} and {{checksumreeboot}}: These are two character uppercase hexadecimal checksums calculated from the command text before the star character.

Checksum calculation (public method used in the manufacturer example):
- Compute the XOR of the ASCII codes for every character in the command string up to but not including the '*' character.
- Convert the resulting byte to a two digit uppercase hexadecimal string (pad with leading zero if needed).
- Insert that two character hex value in place of the checksum placeholder.

The manufacturer page also shows an SMS batch format example used with Plaspy style commands such as:
TSPRXAB27GHKLMnaicz*U!
Preserve the exact command structure shown above when composing SMS configuration messages.

## Configuration Notes

- Firmware and regional variants may change command syntax or checksum requirements; always validate commands on a noncritical device first.
- The TR-151 supports SMS and GPRS configuration methods in public documentation, so use the approach that matches your device setup procedures.
- When given the choice, UDP and TCP are both supported by Plaspy on port 8888; choose the transport that matches your network or firmware recommendation.
- Ensure APN credentials are correct; misconfigured APN will prevent the device from opening a data session to the Plaspy server.
- Rebooting the device after applying server and APN settings is often required to start reporting to the platform.

## Why Use Plaspy with This Configuration

Configuring the GlobalSat TR-151 to report to Plaspy gives organizations consistent visibility into tracked vehicles and assets using a common server and port configuration. With the TR-151 pointed to d.plaspy.com or 54.85.159.138 on port 8888, devices will attempt to send their telemetry over GPRS and Plaspy will automatically detect and process the tracker protocol, simplifying onboarding and ongoing monitoring.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the most current device specific commands, firmware notes, and installation instructions verify the latest details on the GlobalSat official website https://www.globalsat.com.tw/.
