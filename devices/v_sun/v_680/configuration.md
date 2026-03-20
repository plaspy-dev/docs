---
slug: /v_sun/v_680/configuration
id: v_680-configuration
sidebar_label: Configuration
title: V-SUN - V-680 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for V SUN V 680 and how to point the device to Plaspy servers for tracking
keywords:
  - V SUN V 680 configuration
  - V SUN V 680 setup
  - V SUN V 680 server configuration
  - V SUN V 680 SMS commands
  - Plaspy device setup
  - Plaspy GPS tracker configuration
  - GPS tracker APN configuration
  - vehicle tracking setup
  - tracker GPRS server settings
  - V SUN V 680 tracking platform setup
---

# V-SUN - V-680 Configuration

This page documents the public configuration context for using the V-SUN V-680 tracker with Plaspy. It summarizes the practical steps and publicly available SMS commands used to point the device at Plaspy server endpoints so the tracker can report location and status to the platform. Use this guide as a practical starting point for configuring a V-680 for Plaspy compatibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation method, and vendor tools. The V-680 supports SMS based configuration in its public command set and the default device password shown in the examples below is 0000 unless the device owner has already changed it.

## Configuration Overview

This configuration process prepares the V-SUN V-680 to communicate with Plaspy by updating network related settings, server endpoint, reporting intervals, and operation modes. The public SMS commands below illustrate the minimal actions needed to register the tracker with Plaspy and begin reporting.

- Set the device APN so it can use the mobile data network to reach Plaspy.
- Point the device GPRS server to the Plaspy endpoint so location packets arrive at the platform.
- Configure reporting intervals so the device sends updates while moving and when static.
- Enable GPRS and GPS reporting modes so the tracker sends data over the network.
- Optionally perform a factory reset when preparing an unconfigured device.

## Plaspy Server Settings

- Server domain d.plaspy.com for domain based configuration
- Server IP 54.85.159.138 for IP based configuration
- Port 8888 which is the shared port used by Plaspy for all devices
- Transport support using UDP or TCP depending on device selection
- Plaspy automatically detects the tracker protocol when a device connects

## Typical Requirements Before Setup

- A working SIM card with data enabled and SMS capability placed in the V-680
- Power for the device and access to the tracker phone number for SMS setup
- Knowledge of the mobile operator APN; placeholders {{apn}}, {{apnu}}, and {{apnp}} are used below
- Access to the manufacturer SMS configuration method or official configuration tool
- The device password if it has been changed from the default 0000

## How This Tracker Connects to Plaspy

The V-680 is configured to report location and device events to a single Plaspy server endpoint and port so the platform can ingest and display tracking data. Configuration sets the network APN, the GPRS server address, and reporting intervals so the device sends packets to Plaspy over mobile data.

- The tracker uses GPRS data to send position and status messages to the Plaspy endpoint
- The device can be pointed to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Plaspy accepts connections on port 8888 for all supported trackers and auto detects the device protocol
- Transport can be configured as UDP or TCP on the device if required by firmware
- SMS may be used to update settings or verify configuration when data is not yet available

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as SMS commands or the vendor tool provided for the V-680.
2. Confirm or enter the server endpoint by setting d.plaspy.com or 54.85.159.138 on the device.
3. Set the port to 8888 to match the Plaspy server configuration used across devices.
4. Choose UDP or TCP if the device requires a transport selection for GPRS reporting.
5. Apply or save the configuration using the device method and send any required SMS commands.
6. Restart the device or power cycle if required by the firmware to activate new network settings.
7. Validate that the device reports to Plaspy by checking the device online status in the platform once data is transmitted.

## Example Configuration Commands

The V-680 supports SMS based configuration. The public example commands below are provided in the order they were published for basic setup. The default device password shown in these commands is 0000. Preserve placeholders when you substitute your operator values.

1. Optional initial factory reset
```
*RESET#0000##
```
2. Set the operator APN. Replace {{apn}} with your operator APN. If your APN requires a username or password, include {{apnu}} and {{apnp}} respectively. The placeholder segments shown are optional depending on your operator.
```
#803#0000#{{apn}}#{{apnu}}#{{apnp}}#
```
3. Set the GPRS server using the Plaspy IP and port. This command uses the Plaspy server IP 54.85.159.138 and port 8888 shown in this guide.
```
#804#0000#54.85.159.138#8888##
```
4. Set the moving update interval. This public example sets the parameter shown in the original command set.
```
#805#0000#120#1##
```
5. Set the static update interval. This public example sets the parameter shown in the original command set.
```
#809#0000#120#1##
```
6. Enable GPRS mode so the tracker uses mobile data for reporting
```
7100000
```
7. Enable GPS mode so the tracker acquires positioning data
```
2220000
```

Notes on placeholders
- {{apn}} is the mobile operator Access Point Name required for GPRS data.
- {{apnu}} and {{apnp}} are optional APN username and password fields if your operator requires them.
- Replace the default password 0000 if the device password has been changed.

## Configuration Notes

- Manufacturer firmware and SMS command syntax can change between releases and hardware revisions; always confirm with the current V-SUN documentation.
- The tracker accepts either domain or IP for the server setting; Plaspy accepts d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP based on your device firmware options and network considerations; Plaspy will auto detect the protocol once the device connects.
- SMS based setup is commonly used for initial configuration on the V-680; keep the device number and password handy.
- Apply and save settings, then restart the device if changes do not appear to take effect immediately.

## Why Use Plaspy with This Configuration

Using the V-SUN V-680 pointed to Plaspy provides a straightforward way to add the device into a fleet or asset monitoring workflow. With the shared server endpoint and port used by Plaspy, configuration is consistent across supported trackers, simplifying deployment and ongoing device management. Pointing the V-680 to Plaspy enables continuous visibility, event reporting, and centralized operational oversight through the platform.

Learn more about Plaspy on the main website https://www.plaspy.com. For the latest V-680 specific instructions, firmware notes, and official command references verify device details on the manufacturer site http://www.v-sun.cc/ since manufacturer setup methods and firmware behavior can change over time.
