---
slug: /reachfar/rf_v18/configuration
id: rf_v18-configuration
sidebar_label: Configuration
title: Reachfar - RF-V18 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Reachfar RF V18 to Plaspy with practical server and setup guidance
keywords:
  - Reachfar RF V18 configuration
  - Reachfar RF V18 setup
  - Reachfar RF V18 Plaspy
  - Reachfar GPS tracker configuration
  - RF V18 server configuration
  - RF V18 tracking software
  - personal GPS tracker setup
  - RF V18 GPRS configuration
  - Reachfar tracker setup guide
  - RF V18 Plaspy configuration
---

# Reachfar - RF-V18 Configuration

This page provides public configuration guidance for using the Reachfar RF-V18 GPS tracker with Plaspy. It describes the shared Plaspy server settings you must apply on the device or via the vendor tools, explains what to prepare before setup, and outlines a practical workflow to get the RF-V18 reporting into Plaspy for live location and event tracking.

Plaspy uses a single shared server endpoint and port for all supported devices and automatically detects the tracker protocol when the tracker connects. Manufacturer-side configuration steps for the RF-V18 can vary by firmware revision, hardware revision, installation type, or vendor tool; refer to the device documentation and the vendor app or SMS command set for device-specific procedures while using the Plaspy values shown here.

## Configuration Overview

The configuration process prepares the RF-V18 to transmit location and event data to Plaspy reliably over GPRS, with SMS fallback where supported. The goal is to point the device to Plaspy, confirm transport settings, and verify that the platform receives live updates so caregivers can use Plaspy dashboards and alerts.

- Configure the RF-V18 to report to the Plaspy server endpoint and confirm the transport type.
- Ensure the device has a working SIM and cellular data so GPRS TCP/IP reporting functions.
- Validate connectivity by observing the first position and event packets arriving in Plaspy.
- Enable or confirm alert reporting such as SOS, geofence, and low-battery so Plaspy can notify caregivers.
- Save and apply changes on the tracker, then verify continued reporting and stable telemetry.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the RF-V18. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device connects.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP can be used on port 8888
- Plaspy automatically detects the tracker protocol after the device connects

## Typical Requirements Before Setup

- Fully charged device or reliable power so configuration and verification can complete without interruptions.
- Active SIM card with a data plan that supports GPRS TCP/IP reporting and SMS if you plan to use SMS fallback.
- Access to the official Reachfar configuration method or vendor app for the RF-V18 (app, software, or documented SMS commands).
- A Plaspy account and access to the Plaspy platform to validate that the device appears and reports telemetry.
- Basic knowledge of the device firmware version and the vendor configuration tools to follow manufacturer steps.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the RF-V18 sends location and event data over GPRS TCP/IP to the Plaspy endpoint and port. If GPRS connectivity is not available, the device can use SMS-based fallback for some alerts depending on firmware and vendor support.

- The RF-V18 is configured to report to the shared Plaspy server endpoint and port, for example d.plaspy.com on port 8888.
- Position updates (GPS A-GPS LBS) and event messages such as SOS and low battery are transmitted to Plaspy over GPRS.
- SMS may be used as a fallback channel for alerting when GPRS is unavailable; SMS handling depends on device firmware and vendor tools.
- Plaspy receives the telemetry and makes it available for live tracking, geofence notifications, and historical playback.
- Plaspy detects the tracker protocol automatically so the server accepts standard packets from the RF-V18 on the configured port.

## Common Configuration Workflow

1. Access the official Reachfar configuration method (vendor app, web tool, or documented SMS command set) for the RF-V18.
2. In the device configuration, enter the Plaspy server as either d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 as used by Plaspy for all devices.
4. Choose UDP or TCP if the RF-V18 configuration requires you to select a transport protocol.
5. Apply or save the configuration on the device or via the vendor tool.
6. Restart the RF-V18 if the device or vendor instructions require a reboot to activate new settings.
7. Validate that the device reports to Plaspy by confirming the first position and event appear in the Plaspy platform.

## Example Configuration Commands

The RF-V18 may be configured using vendor software or SMS command strings depending on the firmware and market version. Exact command formats vary by manufacturer and firmware revision; consult the Reachfar documentation or vendor app for precise commands. Plaspy requires that the configured server be set to d.plaspy.com or 54.85.159.138 with port 8888 and the chosen transport set to UDP or TCP.

If you have a vendor SMS command set for the RF-V18, follow the vendor documentation and replace the server and port placeholders with Plaspy values. Example placeholder format for SMS based configuration might look like the following in vendor documentation (this is an illustrative template not a device specific command):

- Example SMS style template (vendor documentation may use a similar pattern)

```
SERVER,set,d.plaspy.com,8888
```

```
SERVER,set,54.85.159.138,8888
```

If your vendor documentation uses placeholders for APN or credentials, you may see tokens such as [apn], [apnu], or [apnp]. Keep those placeholders and substitute the correct values for your SIM operator when applying APN configuration.

## Configuration Notes

- Firmware and vendor tool behavior can change the exact configuration steps and command formats; always confirm with the Reachfar documentation for your device firmware.
- Choose UDP or TCP according to the vendor instructions; Plaspy accepts both on port 8888 and will detect the tracker protocol automatically.
- SMS fallback is device dependent. If you rely on SMS for alerts, verify SMS command support and behavior in the vendor manual.
- The Plaspy server settings are shared across supported devices so the same port and endpoint are used consistently for simplified deployment.
- Test the device after configuration to confirm location, SOS, and low-battery alerts reach Plaspy as expected.

## Why Use Plaspy with This Configuration

Using the RF-V18 with Plaspy provides caregivers and administrators with centralized, near real time visibility of personal trackers. The RF-V18’s compact form factor, SOS capability, and two-way voice combined with Plaspy’s cloud reporting enable practical monitoring workflows for child safety, elder care, and temporary supervision scenarios.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and vendor tools for the RF-V18, verify details on the official Reachfar website https://www.reachfargps.com/ since manufacturer instructions and firmware behavior can change over time.
