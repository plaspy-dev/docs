---
slug: /gotop/tk_120/protocol
id: tk_120-protocol
sidebar_label: Protocol
title: GOTOP - TK-120 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GOTOP TK-120 GPS tracker and Plaspy compatibility
keywords:
  - GOTOP TK-120 protocol
  - GOTOP TK-120 GPS protocol
  - GOTOP TK-120 communication protocol
  - TK-120 GPRS tracking
  - TK-120 SMS tracking
  - GOTOP Plaspy compatibility
  - TK-120 tracker protocol
  - GOTOP asset tracking
  - vehicle tracking TK-120
  - GPS tracker communication
---

# GOTOP - TK-120 Protocol

This page provides a public protocol overview for using the GOTOP TK-120 GPS tracker with Plaspy. It describes the general communication context and how the tracker reports location and status to a remote tracking platform. The information focuses on high level, non sensitive details that help administrators and integrators understand how the device communicates with Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices report to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so consider this page a practical integration guide rather than a definitive device reference.

## Protocol Overview

The communication protocol for the TK-120 governs how the device reports position, movement, and status data to a server or replies via SMS. For Plaspy usage the important parts are that the tracker can send usable location data over GPRS and that Plaspy can accept that data and associate it with a device record.

- The protocol enables the TK-120 to transmit GPS coordinates and basic device state to a remote server for tracking and visualization.
- Tracking via GPRS sends periodic position updates to a configured endpoint, enabling near real time monitoring in Plaspy.
- SMS reporting is an alternate mode where the device sends coordinates or a Google Maps link directly to a phone number.
- Protocol behavior can determine reporting intervals, position fields, and status flags that Plaspy uses to display device location and history.
- Proper SIM, APN, and server settings are required on the device for reliable GPRS reporting to the tracking platform.

## How Plaspy Detects the Protocol

Plaspy is designed to accept incoming connections from many tracker models and to automatically detect the protocol used by a reporting device when it connects to the platform endpoint. In most cases you do not need to select a protocol manually inside Plaspy if the device is correctly configured to report to the platform.

- Plaspy listens on a single shared endpoint for device reports and uses that endpoint to accept data from supported trackers.
- The Plaspy server domain for device reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port for reporting, which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol when data arrives at the platform, reducing the need for manual protocol selection.
- If a device is configured to report to the Plaspy endpoint and network connectivity is correct, the usual workflow is to power the tracker and verify that reports are arriving in Plaspy.

## Transport and Connection Context

The TK-120 can report position data over the mobile data network using GPRS and supports common transport modes to deliver that data to a tracking server. When integrating with Plaspy it is important to configure the device to use the correct server address and transport.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Plaspy accepts tracker traffic on port 8888 and uses the same port for all supported devices.
- Devices can be pointed to the Plaspy reporting endpoint by domain name d.plaspy.com or by the server IP 54.85.159.138.
- UDP is commonly used for lightweight position reporting while TCP may be used by devices that prefer a connection oriented transport.
- Ensure the device SIM has a working APN and that the tracker is able to reach the Plaspy endpoint from the mobile network.

## Protocol Compatibility Notes

- Firmware versions may change which fields or messages a TK-120 sends over GPRS, so verify behavior after updates.
- Different hardware revisions or production batches can have minor protocol differences or alternate defaults.
- Manufacturer configuration menus may expose transport selection between UDP and TCP and the reporting port, so confirm those settings match Plaspy requirements.
- SMS behavior such as Google Maps links is device side and separate from server based GPRS reporting used by Plaspy.
- Always validate device reporting by checking that messages reach the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- When in doubt, consult manufacturer documentation for firmware specific notes that affect protocol behavior.

## Why Protocol Understanding Matters

Understanding how the TK-120 communicates helps ensure reliable setup, faster troubleshooting, and predictable long term operation with Plaspy. Even small differences in transport, APN settings, or firmware behavior can affect whether position updates arrive as expected.

- Confirms the device is pointed at the correct reporting endpoint and using the expected transport.
- Helps diagnose connectivity problems such as blocked ports, incorrect APN, or mismatched server settings.
- Enables realistic expectations for reporting frequency, accuracy, and the presence or absence of certain status fields.
- Supports consistent device provisioning by documenting required settings before deployment.
- Reduces time to resolution when updates or firmware changes alter device reporting behavior.

## Why Use Plaspy with This Protocol

Using the GOTOP TK-120 with Plaspy allows organizations to centralize location data, monitor assets and vehicles, and use a single platform for alerts and historical tracking. The TK-120’s compact design and flexible reporting modes make it suitable for a range of applications where discreet and reliable tracking is needed.

To learn more about Plaspy and how it works with a wide range of GPS trackers including the GOTOP TK-120, visit https://www.plaspy.com. For device specific protocol details, firmware notes, and the latest manufacturer guidance, verify current information with GOTOP at https://www.gotop.cc/ as device behavior can change over time.
